// sortingAlgoBubble.js

// Prompt the user to input numbers
let inputNumbers = prompt("Enter numbers separated by commas (e.g., 42,25,12,...):");
let numArray = inputNumbers.split(',').map(Number);

// Function to implement Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    let comparisonLog = [];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            comparisonLog.push(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                // Swap the numbers
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return { sortedArray: arr, log: comparisonLog };
}

// Run bubble sort
const result = bubbleSort(numArray);

// Output the sorted array
console.log("Sorted Array:");
result.sortedArray.forEach(num => console.log(num));

// Output the comparison log
console.log("\nComparison Process:");
result.log.forEach(step => console.log(step));
