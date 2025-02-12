const slice = (arg, startIndex, endIndex) => {
    startIndex = startIndex || 0;
    endIndex = endIndex === undefined ? arg.length : endIndex;

    if (Array.isArray(arg)) {
        let result = [];
        for (let i = startIndex; i < endIndex; i++) {
            result.push(arg[i]);
        }
        return result;
    } else if (typeof arg === "string") {
        let result = "";
        for (let i = startIndex; i < endIndex; i++) {
            result += arg[i];
        }
        return result;
    }
}