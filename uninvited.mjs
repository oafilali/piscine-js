import http from "http"
import fs from "fs/promises"

const server = http.createServer(requestHandler)

const serverFailure = {
    error : "server failed"
}

function startServer() {
    server.listen(5000, function() {
        console.log('Server is listening on port 5000')
    })
}

async function requestHandler(req, res) {
    try {
        if (req.method === "POST") {
            let guestName = req.url.split("/")
            let body = ""
            req.on("data", chunk => {
                body += chunk.toString()
            })
            req.on("end", async () => {
                console.log("Recieved data", body)
                res.writeHead(201, { "Content-Type": "application/json" })
                await fileWriter(`${guestName[guestName.length - 1]}`, body)
            })
        } else {
            res.writeHead(405, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Method not allowed" }));
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(serverFailure))
    }
}

async function fileWriter(fileName, content) {
    try {
        await fs.writeFile(`./guests/${fileName}.json`, content)
        console.log("File created succefully")
    } catch (error) {
        console.error("Error writing file:", error)
    }
}

startServer()