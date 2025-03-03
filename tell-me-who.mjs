import fs from "fs/promises"

async function tellMeWho() {
    let file = await howMany()
    let guests = []
    file.forEach(person => {
        guests.push(removeExtention(person).split("_"))
    })
    guests.sort((a, b) => a[1].localeCompare(b[1]))
    let result = ""
    let counter = 1
    for (let i = 0; i < guests.length; i++) {
        result += `${counter}. ${guests[i][1]} ${guests[i][0]} \n`
        result.trim()
        counter++
    }
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

console.log(await tellMeWho())