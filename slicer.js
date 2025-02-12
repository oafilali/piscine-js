const slice = (arg, startIndex, endIndex) => {
    if (Array.isArray(arg)) {
        let result = []
        for (let i = startIndex || 0; i < endIndex || arg.length; i++) {
            result.push(arg[i])
        }
        return result
    } else if (typeof arg === "string") {
        let result = ""
        for (let i = startIndex || 0; i < endIndex || arg.length; i++) {
            result += arg[i]
        }
        return result
    }
}