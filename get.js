const src = { nested: { key: 'peekaboo' } }
const path = 'nested.key'

const get = (src, path) => {
    let elements = path.split(".");
    let result = src;
    for (let element of elements) {
        result = result[element];
        if (result === undefined) {
            return undefined;
        }
    }
    return result;
}

console.log(get(src, path));