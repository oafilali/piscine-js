const multiply = (a, b) => {
    let count = 0
    let result = 0
    while (count < b) {
        result += a
        count++
    }
    return result
}

const divide = (a, b) => {
    let count = 0
    let result = a
    while (result > b) {
        result = result - b
        count++
    }
    return count
}

const modulo = (a, b) => {
    let result = a
    while (result > b) {
        result = result - b
    }
    return result
}