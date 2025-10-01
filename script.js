 // Part 1: Variable declarations 
        function demoVariables() {
            // Variable declarations with different scopes
            let age = 25;
            const name = "John";
            var isStudent = true;
        };


// part 2: Function to add two numbers
function addNumbers(a, b) {
    let result = a + b;
    return result;
}
let sum = addNumbers(5, 3);
console.log("The sum is: " + sum); 

// Try modifying this function:
function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4));

// Part 3: For loop with even numbers
console.log("\nEven numbers from 2 to 10:");
for (let i = 2; i <= 10; i += 2) {
    console.log("Even: " + i);
}


// Array of fruits
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

// Loop through array with for loop
console.log("My favorite fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log((i + 1) + ". " + fruits[i]);
}

// Part 4: DOM Manipulation
function changeText() {
    document.getElementById("main-heading").innerText = "Hello, World!";
    document.getElementById("main-text").innerText = "This text has been changed using JavaScript.";
}

function resetText() {
    document.getElementById("main-heading").innerText = "Welcome to my website!";
    document.getElementById("main-text").innerText = "This is some sample text.";
}
