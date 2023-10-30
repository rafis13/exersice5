function addArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        throw new Error("Arrays must have the same length");
    }

    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
    }

    return result;
}

const array1 = [1, 2, 3];
const array2 = [3, 2, 1];

const resultArray = addArrays(array1, array2);
console.log(resultArray); // Output: [4, 4, 4]