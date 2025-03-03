
function verydisco () {
    const args = process.argv.slice(2, 3)
    let sanitisedArgs = []
    args.forEach(Element => {
        let splitted = Element.split(" ")
        for (let i = 0; i < splitted.length; i++)
            sanitisedArgs.push(splitted[i])
    })
    let result = []
    sanitisedArgs.forEach(word => {
        let middle = Math.ceil( word.length / 2 )
        let part1 = word.slice(0, middle)
        let part2 = word.slice(middle)
        let joined = part2 + part1
        result.push(joined)
    })
    return result.join(" ")
}

console.log(verydisco())
