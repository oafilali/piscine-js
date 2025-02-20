const adder = (arr, additionalNum = 0) => {
    return arr.reduce((total, num) => total + num, 0) + additionalNum
}

const sumOrMul = (arr, value) => {
    return arr.reduce((total, num) => 
        num % 2 === 0 ? total * num : total + num, 
        value === undefined ? 0 : value
    )
}

const funcExec = (arr, initialValue = 0) => {
    return arr.reduce((result, func) => func(result), initialValue)
}