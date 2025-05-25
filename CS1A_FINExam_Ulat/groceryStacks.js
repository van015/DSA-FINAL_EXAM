// Let's start with an empty array that will serve as our stack
let groceryStack = [];

// Function to add an item to the stack (push to the top)
function push(item) {
  groceryStack.push(item);
  console.log(`PUSH: "${item}" was added.`);
  console.log("Current Stack:", groceryStack);
}

// Function to remove the last item from the stack (pop from the top)
function pop() {
  if (groceryStack.length === 0) {
    console.log("POP: The stack is empty. Nothing to remove.");
  } else {
    let removed = groceryStack.pop();
    console.log(`POP: "${removed}" was removed.`);
    console.log("Current Stack:", groceryStack);
  }
}

// Function to view the top item without removing it (peek)
function peek() {
  if (groceryStack.length === 0) {
    console.log("PEEK: The stack is empty.");
  } else {
    console.log(`PEEK: Top item is "${groceryStack[groceryStack.length - 1]}"`);
  }
}

// Example input using prompt() — you may replace these with actual user inputs in the browser
// For demo purposes, we'll add 5 items manually:
push("Milk");
push("Bread");
push("Eggs");
push("Butter");
push("Cheese");

// Peek at the top item
peek();

// Remove two items
pop();
pop();

// Peek again
peek();