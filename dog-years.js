const orbits = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
}

const dogYears = (planet, age) => {
    const result = ((age / 31557600) * orbits[planet]) * 7;
    return Math.round(result * 100) / 100; 
}

console.log(dogYears('earth', 1000000000))