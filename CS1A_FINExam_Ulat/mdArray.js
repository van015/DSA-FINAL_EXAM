// Let's start with two arrays: one for names and one for their ages
let subArray1 = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"]; // names
let subArray2 = [24, 65, 21, 5, 9]; // corresponding ages

// We'll restructure these into a multi-dimensional array where each item has a [name, age] format
let multiDimensionalArray = [];

// Loop through the arrays and pair each name with its corresponding age
for (let i = 0; i < subArray1.length; i++) {
  multiDimensionalArray.push([subArray1[i], subArray2[i]]);
}

// Let's print each sub-array (name and age pair) on a new line
console.log("Restructured Multi-Dimensional Array:");
multiDimensionalArray.forEach(pair => {
  console.log(pair);
});