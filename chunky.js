const chunk = (arr, size) => {
    let newArr = []
    let subArrs = []
    let counter = 0
    for (let i = 0; i < arr.length; i ++) {
        subArrs.push(arr[i])
        counter++
        if (counter === size) {
            newArr.push(subArrs)
            subArrs = []
            counter = 0
        }
    }
    return newArr
}

console.log(chunk([1, 2, 3, 4, 5, 6], 2))