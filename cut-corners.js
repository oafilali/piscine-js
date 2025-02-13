const trunc = (num) => {
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }
    let intCopy = num;
    let counter = 0;
    while (intCopy >= 1) {
        intCopy -= 1;
        counter++;
    }
    return neg ? -counter : counter;
}

const round = (num) => {
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }
    let intCopy = num;
    let counter = 0;
    while (intCopy >= 1) {
        intCopy -= 1;
        counter++;
    }
    if (intCopy < 0.5) {
        return neg ? -counter : counter;
    } else {
        return neg ? -counter - 1 : counter + 1;
    }
}

const ceil = (num) => {
    if (num === 0) return 0;
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }
    let intCopy = num;
    let counter = 0;
    while (intCopy >= 1) {
        intCopy -= 1;
        counter++;
    }
    return neg ? -counter : counter + 1;
}

const floor = (num) => {
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }
    let intCopy = num;
    let counter = 0;
    while (intCopy >= 1) {
        intCopy -= 1;
        counter++;
    }
    return neg ? -counter - 1 : counter;
}