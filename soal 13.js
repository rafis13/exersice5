function sumNumbersInArray(mixedArray) {
    return mixedArray.reduce((sum, item) => {
        if (typeof item === 'number' && !isNaN(item)) {
            return sum + item;
        }
        return sum;
    }, 0);
}

const mixedArray = ["3", 1, "string", null, false, undefined, 2];
const sum = sumNumbersInArray(mixedArray);
console.log(sum); // Output: 3