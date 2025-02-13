const split = (arg, separator) => {
    let subStr = ""
    let result = []
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] !== separator) {
            subStr += arg[i]
        } else {
            result.push(subStr);
            subStr = "";
        }
    }
    result.push(subStr)
    return result
}

const join = (arg, joiner) => {
    let result = ""
    for (let i = 0; i < arg.length; i++) {
        result += arg[i]
        if (i < arg.length -1) {
            result += joiner
        }
    }
    return result
}