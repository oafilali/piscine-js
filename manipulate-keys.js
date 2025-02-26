const filterKeys = (obj, func) => {
    let result = []
    let arr = Object.entries(obj)
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i][0])) {
            result.push(arr[i])
        }
    }
    return Object.fromEntries(result)
}

const mapKeys = (obj, func) => {
    let result = []
    let arr = Object.entries(obj)
    for (let i = 0; i < arr.length; i++) {
        let holding = []
        holding.push(func(arr[i][0]))
        holding.push(arr[i][1])
        result.push(holding)
        holding = []
    }
    return Object.fromEntries(result)
}

const reduceKeys = (obj, func, initialValue) => {
    let arr = Object.entries(obj)
    let accumulator
    if (initialValue !== undefined) {
        accumulator = initialValue
        for (let i = 0; i < arr.length; i++) {
            accumulator = func(accumulator, arr[i][0])
        }
    } else {
        accumulator = arr[0][0]
        for (let i = 1; i < arr.length; i++) {
            accumulator = func(accumulator, arr[i][0])
        }
    }
    return accumulator
}

const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

//console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
// output: { protein: 20 }
//console.log(mapKeys(nutrients, (k) => `-${k}`))
// output: { -carbohydrates: 12, -protein: 20, -fat: 5 }
console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
// output: carbohydrates, protein, fat