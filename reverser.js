const reverse = (arr) => {
    if (Array.isArray(arr)) {
        let reversedArr = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            reversedArr.push(arr[i]);
        }
        return reversedArr;
    } else if (typeof arr === "string") {
        let reversedStr = ""
        for (let i = arr.length - 1; i >= 0; i--) {
            reversedStr += arr[i]
        }
        return reversedStr
    }
}