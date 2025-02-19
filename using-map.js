const citiesOnly = (arr) => {
    return arr.map( arr => arr.city)
}

const upperCasingStates = (arr) => {
    return arr.map( x => 
        x.split(" ")
        .map( word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
}

const fahrenheitToCelsius = (arr) => {
    return arr.map( x => {
        let splitted = x.split("°")
        splitted[1] = "C"
        let converted = Math.floor(((parseInt(splitted[0]) - 32) * 5) / 9)
        splitted[0] = converted.toString()
        return splitted.join("°")
    })
}

const trimTemp = (arr) => {
    return arr.map( obj => {
        obj.temperature = obj.temperature.trim()
        return obj
    })
}

const tempForecasts = (arr) => {
    return arr.map( x => {
        let result = fahrenheitToCelsius(x.temperature) + "in" + x.city + ", " + x.state
        return x
    })    
}