const repeat = (str, num) => {
    let count = 0
    let result = ""
    while (count < num) {
        result += str
        count += 1
    }
    return result
}