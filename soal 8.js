function combineArrays(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    return combinedArray;
}

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const resultArray = combineArrays(arr1, arr2);
console.log(resultArray); // Output: [1, 2, 3, 4, 5, 6]