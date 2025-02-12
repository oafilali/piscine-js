const indexOf = (arr, element, index) => {
    for (let i = index || 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i
        }
    }
    return -1
}

const lastIndexOf = (arr, element, index) => {
    for (let i = index || arr.length - 1; i >= 0; i--) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

const includes = (arr, element, index) => {
    for (let i = index || 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true
        }
    }
    return false
}