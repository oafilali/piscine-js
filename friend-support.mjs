import http from "http"
import fs from "fs/promises"

const server = http.createServer(requestHandler)

const guestNotFound = {
    error : "guest not found"
}
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
        let guestName = req.url.split("/")
        let {data, err} = await fileReader(`./guests/${guestName[guestName.length - 1]}.json`)
        if (err) {
            if (err.code === "ENOENT") {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(guestNotFound))
            } else {
                res.writeHead(500, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(serverFailure))
            }
        } else {
            let jsonData = JSON.parse(data)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(jsonData))
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(serverFailure))
    }
}

async function fileReader(file) {
    let data = ""
    let err = null
    try {
        data = await fs.readFile(`${file}`, "utf8")
    } catch (error) {
        console.error("Error reading file:", error)
        err = error
    }
    return {data, err}
}

startServer()