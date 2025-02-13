const modulo = (a, b) => {
    if (b === 0) return NaN;
    const absA = a < 0 ? -a : a;
    const absB = b < 0 ? -b : b;
    let result = absA;
    while (result >= absB) {
        result -= absB;
    }
    return a < 0 ? -result : result;
}

const trunc = (num) => {
    return num - modulo(num, 1);
}

const round = (num) => {
    let rounded = num + (num < 0 ? -0.5 : 0.5);
    return trunc(rounded);
}

const ceil = (num) => {
    const int = trunc(num);
    return int < num ? int + 1 : int;
}

const floor = (num) => {
    const int = trunc(num);
    return int > num ? int - 1 : int;
}