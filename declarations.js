const escapeStr = "let's \' \" \/ \\ \` go"
const arr = [4, '2']
const obj = {
    str : "hello",
    num : 12,
    bool : true,
    undef : undefined
}
const nested = {
    arr : [4, undefined, '2'],
    obj : {
        str : "there",
        num : 24,
        bool : true
    }
}

Object.freeze(nested)
Object.freeze(arr)
Object.freeze/obj