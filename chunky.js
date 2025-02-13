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
    newArr.push(subArrs)
    return newArr
}

console.log(chunk(['a', 'b', 'c', 'd'], 3))