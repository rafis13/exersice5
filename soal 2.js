function concatenate_words(arr) {
    if (!arr) {
        return "";
    }

    if (arr.length === 1) {
        return arr[0];
    }

    // Join all words with commas except the last one, which is joined with "and"
    const result = arr.slice(0, -1).join(", ") + " and " + arr[arr.length - 1];

    return result;
}

const arr = ["apple", "banana", "cherry", "date"];