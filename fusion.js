const fusion = (obj1, obj2) => {
    // Create a new object to store the result
    let result = {};

    // Get the union of keys from both objects
    let keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);

    // Iterate over each key
    keys.forEach(key => {
        // If both objects have the key and the values are of the same type
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {
            const value1 = obj1[key];
            const value2 = obj2[key];

            // Handle different types of values
            if (Array.isArray(value1) && Array.isArray(value2)) {
                // Concatenate arrays
                result[key] = value1.concat(value2);
            } else if (typeof value1 === "string" && typeof value2 === "string") {
                // Concatenate strings with a space
                result[key] = value1 + " " + value2;
            } else if (typeof value1 === "number" && typeof value2 === "number") {
                // Add numbers
                result[key] = value1 + value2;
            } else if (typeof value1 === "object" && typeof value2 === "object") {
                // Recursively merge objects
                result[key] = fusion(value1, value2);
            } else {
                // Replace with the value from obj2 if types mismatch
                result[key] = value2;
            }
        } else if (obj2.hasOwnProperty(key)) {
            // If only obj2 has the key, add its value to the result
            result[key] = obj2[key];
        } else {
            // If only obj1 has the key, add its value to the result
            result[key] = obj1[key];
        }
    });

    return result;
};