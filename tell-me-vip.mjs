import fs from "fs/promises"

async function tellMeWho() {
    let args = process.argv.slice(2, 3)
    let file = await howMany()
    let vipGuests = []
    for (const element of file) {
        let data = await fileReader(`${args[0]}/${element}`)
        let obj = JSON.parse(data)
        if (obj.answer.toLowerCase() === "yes") {
            vipGuests.push(element)
        }
    }

    let guests = []
    vipGuests.forEach(person => {
        guests.push(removeExtention(person).split("_"))
    })
    guests.sort((a, b) => a[1].localeCompare(b[1]))
    let result = ""
    let counter = 1
    for (let i = 0; i < guests.length; i++) {
        result += `${counter}. ${guests[i][1]} ${guests[i][0]}\n`
        counter++
    }
    fileWriter(result.trim())
    return result
}

async function howMany() {
    let args = process.argv.slice(2, 3)
    let file = []
    try {
        file = await fs.readdir(args[0])
    } catch {
        console.error("Error reading the directory...")
    }
    return file
}

function removeExtention(str) {
    return str.replace(".json", "")
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

async function fileWriter(content) {
    try {
        await fs.writeFile("./vip.txt", content)
        console.log("File written successfully")
    } catch (error) {
        console.error("Error writing file:", error)
    }
}

console.log(await tellMeWho())