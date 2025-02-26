const filterEntries = (obj, func) => {
    let result = []
    let arr = Object.entries(obj)
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            result.push(arr[i])
        }
    }
    return Object.fromEntries(result)
}

const mapEntries = (obj, func) => {
    let result = []
    let arr = Object.entries(obj)
    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i]))
    }
    return Object.fromEntries(result)
}

const reduceEntries = (obj, func, initialValue) => {
    let arr = Object.entries(obj)
    let accumulator
    if (initialValue !== undefined) {
        accumulator = initialValue
        for (let i = 0; i < arr.length; i++) {
            accumulator = func(accumulator, arr[i])
        }
    } else {
        accumulator = arr[0][0]
        for (let i = 1; i < arr.length; i++) {
            accumulator = func(accumulator, arr[i])
        }
    }
    return accumulator
}

const totalCalories = (obj) => {
    let calories = 0
    Object.entries(obj).forEach(([item, grams]) => {
        const nutrition = nutritionDB[item]
        if (nutrition) {
            calories += (nutrition.calories * grams) / 100
        }
    })
    return Math.round(calories * 10) / 10
}

function lowCarbs(entries) {
    // prettier-ignore
    return filterEntries(entries, (entry) => {let value = (nutritionDB[entry[0]]["carbs"] / 100) * entry[1];return parseInt(value) <= 50;});
}

function cartTotal(entries) {
    let res = {};
    for (let key in entries) {
        res[key] = {};
        for (let dbKey in nutritionDB[key]) {
            res[key][dbKey] =
                Math.round(
                    (entries[key] / 100) * nutritionDB[key][dbKey] * 1000
                ) / 1000;
        }
    }
    return res;
}
