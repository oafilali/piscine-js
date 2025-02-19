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
        obj.temperature = obj.temperature.replaceAll(" ", "")
        return obj
    })
}

const tempForecasts = (arr) => {
    return arr.map((item) => {
      return `${
        Math.floor(
          (Number(item.temperature.trim().slice(0, -2)) - 32) * (5 / 9)
        ).toString() + "°Celsius"
      } in ${item.city.charAt(0).toUpperCase() + item.city.slice(1)}, ${item.state
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")}`;
    });
  }