import fs from "fs/promises"

async function howMany() {
    let args = process.argv.slice(2, 3)
    let file = []
    try {
        file = await fs.readdir(args[0])
    } catch {
        console.error("Error reading the directory...")
    }
    return file.length
}

console.log(await howMany())