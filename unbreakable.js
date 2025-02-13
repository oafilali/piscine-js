const split = (arg, separator) => {
    let subStr = "";
    let result = [];
    let sepLen = separator.length;
    for (let i = 0; i < arg.length; i++) {
        if (arg.slice(i, i + sepLen) === separator) {
            result.push(subStr);
            subStr = "";
            i += sepLen - 1;
        } else {
            subStr += arg[i];
        }
    }
    result.push(subStr);
    return result;
}

const join = (arg, joiner) => {
    let result = "";
    for (let i = 0; i < arg.length; i++) {
        result += arg[i];
        if (i < arg.length - 1) {
            result += joiner;
        }
    }
    return result;
}