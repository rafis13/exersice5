function arrayDifference(arr1, arr2) {
    const difference = arr1.filter(item => !arr2.includes(item)).concat(arr2.filter(item => !arr1.includes(item)));
    return difference;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const result = arrayDifference(arr1, arr2);
console.log(result); // Output: [1, 2, 6, 7]