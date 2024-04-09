// IF ELSE
// SWITCH CASE

// Write a program that uses age to print the status of person

// const age = Number(prompt("Enter your Age")); //30

// if (age >= 30) {
//   alert("You are old");
// } else {
//   alert("You are young");
// }

/*
if(condition){
    // code block 1 run
}else {
    code block 2 run
}
*/

// Write a js program that check your username and password.
// If username is your name and password is your name
// Print welcome admin
// else
// if username is equal to password but for another person
// Print welcome user

// Write a js program that ask user the time
// if the time is in between 4 and 5:30
// alert class is in session
// else
// alert class is completed for today

// const time = Number(prompt("What is the time? Select between 1 to 6"));

// const classRunCondition = time >= 4 && time <= 5.5;

// if (classRunCondition) {
//   alert("Class is in session");
// } else {
//   alert("Class is completed for today");
// }

// if {}
// else if {}
// else if{}
// else{}

// Switch case statement

/*
const userTime = ""
switch(userTime){
  case (cond1):
    alert("Class has not started")
    break;
  case (condn2):
    alert("Class is in session")
    break;
  case value:
    alert("Class has finished for today");
    break;
  default:
    alert("Invalid Time")
}
*/

// user time 1 to 6
// class is running: time >=4 && time <=5.5
// class has not started: time >=1 && time <4
// class is over: time >5.5 && time <= 6
// invalid

// const time = Number(prompt("Enter time between 1 to 6"));

// switch (time) {
//   case 4:
//   case 5:
//     alert("Class is running");
//     break;
//   case 1:
//   case 2:
//   case 3:
//     alert("Class has not started");
//     break;
//   case 6:
//     alert("Class is Over");
//     break;
//   default:
//     alert("Invalid Time");
// }

// Scoring Grading tool
// userScore =  85;
// Rank ?? // A,B,C,D,F

// A = 90 and above
// B = 80 and below 90
// C = 70 and below 80
// D = 60 and below 70
// F = below 60

// Switch case

const userScore = Number(prompt("Enter your score"));

// condition
switch (true) {
  case userScore >= 90:
    alert("A");
    break;
  case userScore >= 80:
    alert("B");
    break;
  case userScore >= 70:
    alert("C");
    break;
  case userScore >= 60:
    alert("D");
    break;
  default:
    alert("F");
}

// ifelse, ifelseif, switch case (ES5)
// ES6
// Ternary Operator

// condition if else

// un === raktim  welcome admin / welcome user

// if (un === "raktim") {
//   alert("welcome admin");
// } else {
//   alert("welcome user");
// }

// Ternary Operation
// const un = prompt("Enter your name");
// un === "raktim" ? alert("welcome admin") : alert("Welcome user");
// condition ? true : false

const gender = "o";

gender === "m"
  ? alert("male")
  : gender === "f"
  ? alert("female")
  : alert("Other");
