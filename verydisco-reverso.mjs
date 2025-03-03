import fs from "fs/promises"

const args = process.argv.slice(2, 3)

async function verydiscoReverse() {
    let data = ""
    try {
        data = await fs.readFile(`./${args}`, "utf8")
        console.log("File read successfully")
    } catch (error) {
        console.error("Error reading file:", error)
    }
    let result = notverydisco(data)
    console.log(result)
}

function notverydisco (data) {
    let sanitisedArgs = data.split(" ")
    let result = []
    sanitisedArgs.forEach(word => {
        let middle = Math.floor( word.length / 2 )
        let part1 = word.slice(0, middle)
        let part2 = word.slice(middle)
        let joined = part2 + part1
        result.push(joined)
    })
    return result.join(" ")
}

verydiscoReverse()