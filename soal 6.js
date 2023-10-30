function removeOddNumbers(arr) {
    const evenNumbers = arr.filter(number => number % 2 === 0);
    return evenNumbers;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = removeOddNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6]