console.log("hello world");

// variable (single line comment)

/*   (multi line comment)
Hi
I 
am
raktim
*/

// variable start
// keywords: var, let, const
// var (used for global variable define)
// let (reuse variable)
// const (value constant)

const person = "raktim shrestha";
const person1 = "nischal basnet";
let number = 3.14;

number = 5;

// print the number
console.log(number);
console.log({ person });
console.log({ person1 });

// Interaction
const question1 = prompt("What is your name?");

const question2 = confirm("are you 18 years or above?");
console.log({ question1, question2 });

// Update the above question1 and question2 to print name and age
// through alert

alert(
  question1 + " is your name and you are " + question2 + " above 18 years old"
);

// Write a multiplication calculator for 3 digits
