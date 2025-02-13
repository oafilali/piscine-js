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
    return num - modulo(num, 1);
}

const round = (num) => {
    let rounded = num + (num < 0 ? -0.5 : 0.5);
    return trunc(rounded);
}

const ceil = (num) => {
    if (trunc(num) === num) {
        return num;
    }
    return trunc(num) + 1;
}

const floor = (num) => {
    return trunc(num);
}