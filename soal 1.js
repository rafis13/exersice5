//Write a function to get the lowest, highest and average value in the array (with and without sort function).

//Without using sort function
function get_stats(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    let lowest = arr[0];
    let highest = arr[0];
    let total = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        if (num < lowest) {
            lowest = num;
        }
        if (num > highest) {
            highest = num;
        }
        total += num;
    }

    let average = total / arr.length;
    return { 'lowest': lowest, 'highest': highest, 'average': average };
}

let arr = [12, 5, 23, 18, 4, 45, 32];
let result = get_stats(arr);


//using sort function
function get_stats_with_sort(arr) {
    if (!arr || arr.length === 0) {
        return null;
    }

    arr.sort(function(a, b) {
        return a - b;
    });

    let lowest = arr[0];
    let highest = arr[arr.length - 1];
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    let average = total / arr.length;
    return { 'lowest': lowest, 'highest': highest, 'average': average };
}

let arr1 = [12, 5, 23, 18, 4, 45, 32];
let result1 = get_stats_with_sort(arr1);
console.log(result1);

lowest = arr[0]
highest = arr[-1]

total = sum(arr)
average = total / len(arr)

return { 'lowest': lowest, 'highest': highest, 'average': average }

arr = [12, 5, 23, 18, 4, 45, 32]
result = get_stats_with_sort(arr)
print(result)