const slice = (arg, startIndex, endIndex) => {
    if (endIndex === undefined) {
        endIndex = input.length;
    }
    if (startIndex < 0) {
        startIndex = input.length + startIndex;
    }
    if (endIndex < 0) {
        endIndex = input.length + endIndex;
    }
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