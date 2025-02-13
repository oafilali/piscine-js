const reverse = (arr) => {
    let reservedArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reservedArr.push(arr[i])
    }
    return reservedArr
}