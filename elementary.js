const multiply = (a, b) => {
    let count = 0;
    let sign = 0;
    let result = 0;
    if (a < 0) {
        a = -a;
        sign++;
    }
    if (b < 0) {
        b = -b;
        sign++;
    }
    while (count < b) {
        result += a;
        count++;
    }
    return sign == 1 ? -result : result;
}

const divide = (a, b) => {
    let count = 0;
    let sign = 0;
    let result = a;
    if (a < 0) {
        result = -a;
        sign++;
    }
    if (b < 0) {
        b = -b;
        sign++;
    }
    while (result >= b) {
        result -= b;
        count++;
    }
    return sign == 1 ? -count : count;
}

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