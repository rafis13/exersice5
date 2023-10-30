function insertIntegersWithMaxSize(arr, maxSize, ...integers) {
    if (arr.length + integers.length > maxSize) {
        throw new Error("Array exceeds the maximum size.");
    }

    arr.push(...integers);
    return arr.slice(0, maxSize);
}

const maxSize = 5;
const initialArray = [];
const integersToAdd = [5, 10, 24, 3, 6, 7, 8];

const resultArray = insertIntegersWithMaxSize(initialArray, maxSize, ...integersToAdd);
console.log(resultArray); // Output: [5, 10, 24, 3, 6]