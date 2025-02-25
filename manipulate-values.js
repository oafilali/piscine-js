const filterValues = (obj, func) => {
    let result = []
    let arr = Object.entries(obj)
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i][1])) {
            result.push(arr[i])
        }
    }
    return Object.fromEntries(result)
}

const mapValues = (obj, func) => {
    let result = []
    let arr = Object.entries(obj)
    for (let i = 0; i < arr.length; i++) {
        let holding = []
        holding.push(arr[i][0])
        holding.push(func(arr[i][1]))
        result.push(holding)
        holding = []
    }
    return Object.fromEntries(result)
}

const reduceValues = (obj, func, initialValue) => {
    let arr = Object.entries(obj)
    let accumulator
    if (initialValue !== undefined) {
        accumulator = initialValue
        for (let i = 0; i < arr.length; i++) {
            accumulator = func(accumulator, arr[i][1])
        }
    } else {
        accumulator = arr[0][1]
        for (let i = 1; i < arr.length; i++) {
            accumulator = func(accumulator, arr[i][1])
        }
    }
    return accumulator
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }
//console.log(filterValues(nutrients, (v) => v <= 80))

//console.log(mapValues(nutrients, (v) => v+1))
// output: { carbohydrates: 13, protein: 21, fat: 6 }

console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// output: 37