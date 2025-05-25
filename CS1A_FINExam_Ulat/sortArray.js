// Let's declare two arrays: one for numbers and one for names
let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Combine both arrays into a single array
let combinedArray = numbers.concat(names);
console.log("Combined Array:", combinedArray);

// Sort the numbers in descending order (from highest to lowest)
let sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers sorted in reverse:", sortedNumbers);

// Sort the names alphabetically (A to Z)
let sortedNames = [...names].sort();
console.log("Names sorted alphabetically:", sortedNames);