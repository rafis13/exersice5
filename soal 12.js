function findSecondSmallestNumber(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least two numbers");
    }

    let smallest = arr[0];
    let secondSmallest = arr[1];

    if (smallest > secondSmallest) {
        smallest = arr[1];
        secondSmallest = arr[0];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] < smallest) {
            secondSmallest = smallest;
            smallest = arr[i];
        } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
            secondSmallest = arr[i];
        }
    }

    return secondSmallest;
}

const numbers = [5, 3, 1, 7, 2, 6];
const secondSmallest = findSecondSmallestNumber(numbers);
console.log(secondSmallest); // Output: 2