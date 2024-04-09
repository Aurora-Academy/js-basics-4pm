console.log("Day 2");

//Data Types

// Primitive Data Type

//1 String

const person = "ram";
let female = "sita";
const user = "raktim";
const user2 = `nischal`; // backtick, tilde sign
var num = 20.0;

console.log({ person, female, user, user2, num });

//2 Number

const pi = 3.14;
const num2 = 2;
const num3 = 2.0;

console.log({ pi, num2, num3 });

//3 Boolean (true/ false)

const isRaktimBoy = false; // Camel Case
const isRaktimMan = true;

console.log({ isRaktimBoy, isRaktimMan });

//4 undefined
let test;
var test2;
console.log({ test, test2 });

//5 null
const data = null;
console.log({ data });

// type Conversion & Type Coercion

// Multiply using interaction (prompt)

const mul1 = prompt("Enter 1st Num"); // string
const mul2 = prompt("Enter 2nd Num"); // string

// type conversion Method 1
const result = Number(mul1) * Number(mul2);
const stringOnly = String(mul1);
console.log({ result, stringOnly });

// Type Conversion Method 2
const result2 = +mul1 * +mul2;
console.log({ result2 });

// Operator (Logical)

// AND && , OR || , NOT !

const andCheck = mul1 && mul2; // 2 (true)
const orCheck = mul1 || mul2; // 2 (true)
const notCheck = !mul1; //false

console.log({ andCheck, orCheck, notCheck });
