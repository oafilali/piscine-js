const pick = (obj, str) => {
    return Object.fromEntries(
        Object.entries(obj)
            .filter(([key]) => (typeof(str) === "string") ? key === str : str.includes(key))
    )
}

const omit = (obj, str) => {
    return Object.fromEntries(
        Object.entries(obj)
            .filter(([key]) => (typeof(str) === "string") ? key !== str : !str.includes(key))
    )
}