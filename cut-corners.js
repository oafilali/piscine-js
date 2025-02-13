const trunc = (num) => {
    let counter = 0;
    if (num > 0xfffffffff) {
        num -= 0xfffffffff;
        counter += 0xfffffffff;
    }
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }
    let intCopy = num;
    while (intCopy >= 1) {
        intCopy -= 1;
        counter++;
    }
    return neg ? -counter : counter;
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