const filterShortStateName = (arr) => {
    return arr.filter(word => word.length < 7)
}

const filterStartVowel = (arr) => {
    let query = ["a", "e", "i", "o", "u"];
    return arr.filter((element) => query.includes(element.charAt(0).toLowerCase()))
}

const filter5Vowels = (arr) => {
    let query = ["a", "e", "i", "o", "u"];
    return arr.filter((element) => {
        let vowelCount = element.toLowerCase().split('').filter(char => query.includes(char)).length;
        return vowelCount >= 5;
    });
};

const filter1DistinctVowel = (arr) => {
    return arr.filter((word) => {
        let vowels = word.toLowerCase().split('').filter(char => "aeiou".includes(char));
        let uniqueVowels = new Set(vowels);
        return uniqueVowels.size === 1;
    });
};


function multiFilter(arr) {
    return arr.filter(obj => 
        obj.capital.length >= 8 &&   
        !/^[aeiouAEIOU]/.test(obj.name) &&
        /[aeiouAEIOU]/.test(obj.tag) &&
        obj.region !== "South"
    );
}