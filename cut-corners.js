const modulo = (a, b) => {
    let sign = 0;
    let result = a;
    if (a < 0) {
        result = -a;
        sign++;
    }
    if (b < 0) {
        b = -b;
    }
    while (result >= b) {
        result -= b;
    }
    return sign == 1 ? -result : result;
}

const trunc = (num) => {
    return  num - (num - (modulo(num, 1)))
}

const round = (num) => {
    let rounded = num + 0.5
    let trunced = trunc(rounded)
    let truncedNum = trunc(num)
    if (trunced === truncedNum) {
        return truncedNum
    }
    return truncedNum + 1
}

const ceil = (num) => {
    if (trunc(num) === num) {
        return num
    }
    return trunc(num) + 1
}

const floor = (num) => {
    return trunc(num)
}