function addElementIfNotExists(arr, newElement) {
    if (arr.indexOf(newElement) === -1) {
        arr.push(newElement);
    }
}

const arr1 = [1, 2, 3, 4];
const newElement1 = 4;
addElementIfNotExists(arr1, newElement1);
console.log(arr1); // Output: [1, 2, 3, 4]

const arr2 = [1, 2, 3, 4];
const newElement2 = 7;
addElementIfNotExists(arr2, newElement2);
console.log(arr2); // Output: [1, 2, 3, 4, 7]