const slice = (arr, startIndex, endIndex) => {
    let result = []
    for (let i = startIndex || 0; i < endIndex || arr.lenght; i++) {
        result.push(arr[i])
    }
    return result
}