const invert = (arg) => Object.fromEntries(
    Object
        .entries(arg)
        .map((([key, value]) => ([value, key])))
)