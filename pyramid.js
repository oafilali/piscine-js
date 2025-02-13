const pyramid = (str, num) => {
    let result = "";
    for (let i = 1; i <= num; i++) {
        for (let j = 0; j < num - i; j++) {
            result += " ";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            result += str;
        }
        if (i !== num) {
            result += "\n";
        }
    }
    return result;
}

console.log(pyramid("*", 5));

