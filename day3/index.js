console.log("Day 3");

// Loops

// For
// do while
// while

// Write a js program that prints from 1 to 10

let val = 1;
val++; //2
val += 1; //3
console.log({ d: val });

// ++ => Unary Operator
for (let num = 1; num <= 10; num++) {
  console.log(num);
}

// do while
console.log("===========");
let result = 1;
do {
  console.log(result);
  result++;
} while (result <= 10);

// while
console.log("===========");
let resp = 1;
while (resp <= 10) {
  console.log(resp);
  resp++;
}

// Write a multiplication table for 3

let i = 1;
const num = 3;
do {
  console.log(num * i);
  i++;
} while (i <= 10);

// write a factorial of 5 (5*4*3*2*1)

console.log("=============");
let temp = 1;
for (let number = 5; number >= 0; number--) {
  if (number === 0) {
    number = 1;
    temp = temp * number;
    break;
  }
  temp = temp * number;
}
console.log(temp);

// comparison sign
/* 
= assign the value
== value compare
=== value and data type compare
*/

let person = "string";
let person1 = 132;

console.log(person == person1);
