import http from "http"
import fs from "fs/promises"

const server = http.createServer(requestHandler)

const serverFailure = {
    error: "server failed"
}

const bestFriends = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"]
const password = "abracadabra"

function startServer() {
    server.listen(5000, function() {
        console.log('Server is listening on port 5000')
    })
}

async function requestHandler(req, res) {
    try {
        if (req.method === "POST") {
            const authHeader = req.headers['authorization']
            if (!authHeader) {
                res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Secure Area"' })
                res.end("Unauthorized")
                return
            }
            const [scheme, credentials] = authHeader.split(" ")
            if (scheme !== "Basic" || !credentials) {
                res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Secure Area"' })
                res.end("Unauthorized")
                return
            }
            const decodedCredentials = Buffer.from(credentials, 'base64').toString('utf8')
            const [user, pass] = decodedCredentials.split(":")
            let guestName = req.url.split("/")
            let isMatch = false
            for (let friend of bestFriends) {
                if (friend === user && pass === password) {
                    let body = ""
                    req.on("data", chunk => {
                        body += chunk.toString()
                    })
                    req.on("end", async () => {
                        console.log("Body received:", req.headers.body)
                        try {
                            const parsedBody = JSON.parse(req.headers.body)
                            let err = await fileWriter(`${guestName[guestName.length - 1]}`, JSON.stringify(parsedBody))
                            if (err) {
                                res.writeHead(500, { 'Content-Type': 'application/json' })
                                res.end(JSON.stringify(serverFailure))
                                return
                            }
                            res.writeHead(200, { "Content-Type": "application/json" })
                            res.end(JSON.stringify(parsedBody))
                        } catch (error) {
                            res.writeHead(400, { 'Content-Type': 'application/json' })
                            res.end(JSON.stringify({ error: 'Invalid JSON format' }))
                        }
                    })
                    isMatch = true
                    break
                }
            }
            if (!isMatch) {
                res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="Secure Area"' })
                res.end("Unauthorized")
            }
        } else {
            res.writeHead(405, { "Content-Type": "application/json" })
            res.end(JSON.stringify({ error: "Method not allowed" }))
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(serverFailure))
    }
}

async function fileWriter(fileName, content) {
    let err = null
    try {
        await fs.writeFile(`guests/${fileName}.json`, content)
        console.log("File created successfully")
    } catch (error) {
        console.error("Error writing file:", error)
        err = error
    }
    return err
}

startServer()