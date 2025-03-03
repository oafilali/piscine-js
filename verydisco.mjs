const args = process.argv.slice(2)
let result = []

function verydisco () {
    args.forEach(word => {
        let middle = Math.ceil( word.length / 2 )
        let part1 = word.slice(0, middle)
        let part2 = word.slice(middle)
        let joined = part2 + part1
        result.push(joined)
        joined = ""
    })
    return result.join(" ")
}




console.log(verydisco())
