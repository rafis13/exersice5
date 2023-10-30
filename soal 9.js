function findDuplicateValues(arr) {
    const duplicateValues = [];
    const valueCount = {};

    for (const item of arr) {
        if (valueCount[item]) {
            valueCount[item]++;
        } else {
            valueCount[item] = 1;
        }
    }

    for (const key in valueCount) {
        if (valueCount[key] > 1) {
            duplicateValues.push(parseInt(key));
        }
    }

    return duplicateValues;
}

const arr = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const result = findDuplicateValues(arr);
console.log(result); // Output: [2, 3, 5]