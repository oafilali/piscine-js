const nasa = (N) => {
    let result = ""
    if (N % 3 === 0) {
        return "NA"
    } else if (N % 5 === 0) {
        return "SA"
    } else if (N % 3 === 0 && N % 5 === 0) {
        return "NASA"
    } else {
        for (let i = 1; i <= N; i++) {
            result += String(i)
            if ( i !== N) {
                result += " "
            }
        }
        return result
    }
}

console.log(nasa(11))