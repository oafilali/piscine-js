import buffer from "buffer"
import fs from "fs/promises"

async function cypher() {
    let args = process.argv.slice(2, 5)
    let data = await fileReader(args[0])
    if (args[1] === "encode") {
        let encoded = Buffer.from(data).toString("base64")
        if (args.length === 3) {
            await fileWriter(`${args[2]}`, encoded)
        } else {
            await fileWriter("cypher.txt", encoded)
        }
    } else if (args[1] === "decode") {
        let decoded = Buffer.from(data, "base64").toString("utf8")
        if (args.length === 3) {
            await fileWriter(`${args[2]}`, decoded)
        } else {
            await fileWriter("clear.txt", decoded)
        }
    } else {
        console.log(`${args[1]} is not a supported option ...`)
    }
}

async function fileReader(file) {
    let data = ""
    try {
        data = await fs.readFile(`${file}`, "utf8")
    } catch (error) {
        console.error("Error reading file:", error)
    }
    return data
}

async function fileWriter(fileName, content) {
    try {
        await fs.writeFile(`./${fileName}`, content)
        console.log("File written successfully")
    } catch (error) {
        console.error("Error writing file:", error)
    }
}

cypher()