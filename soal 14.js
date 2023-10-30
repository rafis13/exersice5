function sumDuplicateValues(arr) {
    const valueCount = {};
    let sum = 0;

    for (const item of arr) {
        if (valueCount[item]) {
            sum += item;
        }
        valueCount[item] = (valueCount[item] || 0) + 1;
    }

    return sum;
}

const arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
const result = sumDuplicateValues(arr);
console.log(result); // Output: 40