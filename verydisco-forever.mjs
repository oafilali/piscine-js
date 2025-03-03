import { verydisco } from "./verydisco.mjs"
import fs from "fs/promises"

async function verydiscoForever() {
    try {
        await fs.writeFile("./verydisco-forever.txt", verydisco())
        console.log("File written successfully")
    } catch (error) {
        console.error("Error writing file:", error)
    }
}

verydiscoForever()