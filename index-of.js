const indexOf = (arr, element, index) => {
    for (let i = index || 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

const lastIndexOf = (arr, element, index) => {
    let lastindex = -1
    for (let i = index  || 0; i < arr.length; i++) {
        if (arr[i] === element) {
            lastindex = i
        }
    }
    return lastindex
}

const includes = (arr, element, index) => {
    for (let i = index || 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true
        }
    }
    return false
}