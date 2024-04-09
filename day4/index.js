console.log("Day 4");

// Functions

// Function Define
// Function variable pass
// Function call

// Write a function that says hi to the user

// Es5

// function hi(user) {
//   const hello = `Hi, ${user}`;
//   return hello;
// }

// ES6 (Arrow Function)

const hi = (name, lastname) => {
  return `Hi, ${name} ${lastname}`;
};

const result = hi("raktim shrestha kumar sigdel");
const result1 = hi("Raktim");

console.log({ result, result1 });

// Write a js function to add 2 numbers
// ask user for numbers using prompt

// Function define

const add = (a, b) => {
  return a + b;
};

// function variable
const num1 = Number(prompt("Enter first number"));
const num2 = Number(prompt("Enter second number"));

// function call

const sum = add(num1, num2);
console.log({ sum });

// Write a jsfunction that take username and password
// if username === raktim && password=== raktim
// welcome admin
// nischal, nischal, welcome user
// invalid password or username

login("raktim", "raktim"); // welcome admin
login("raktim", "test"); // Invalid Password or username
login("nischal", "nischal"); // welcome user

// Write a js function to solve the factorial of 5
// (recursive function)
