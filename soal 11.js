function getPrimitiveDataTypes(arr) {
    return arr.filter(item => typeof item !== 'object' && typeof item !== 'function');
}

const arr = [1, [], undefined, {}, "string", {},
    []
];
const result = getPrimitiveDataTypes(arr);
console.log(result); // Output: [1, undefined, "string"]