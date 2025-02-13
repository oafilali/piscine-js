const reverse = (arr) => {
    let reservedArr = []
    for (let i = arr.length; i > 0; i--) {
        reservedArr.push(arr[i])
    }
    return arr
}