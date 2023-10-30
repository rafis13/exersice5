function splitStringIntoWords(inputString) {
    // Use the split method to split the input string into words
    var words = inputString.split(' ');

    // Print the array of words
    console.log("Array of words:", words);

    // Join the words back into a string
    var joinedString = words.join(' ');

    // Print the joined string
    console.log("Joined string:", joinedString);

    // Get the number of words in the array
    var wordCount = words.length;
    console.log("Number of words:", wordCount);
}

var inputString = "Hello World";
splitStringIntoWords(inputString);