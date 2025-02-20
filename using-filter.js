const filterShortStateName = (arr) => {
    return arr.filter(word => word.length < 7)
}

const filterStartVowel = (arr) => {
    let query = ["a", "e", "i", "o", "u"];
    return arr.filter((element) => query.includes(element.charAt(0).toLowerCase()))
}

const filter5Vowels = (arr) => {
    let query = ["a", "e", "i", "o", "u"];
    return arr.filter((element) => element.length.query.includes(element.toLowerCase()) >= 5)
}