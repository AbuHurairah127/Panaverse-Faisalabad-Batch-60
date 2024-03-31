// Number || String

// +
var num1: number = 15;
var num2: number = 10;

var sum: number = num1 + num2;
// console.log(sum);

var firstName: string = "Abu ";
var lastName: string = "Hurairah";
// concatenation
var fullName: string = firstName + lastName;
// console.log("🚀 ~ fullName:", fullName);

var str1 = "20";
var str2 = "10";

var fullStr: string = 1 + num2 + str1;

// 10 + 10
// 2020
// console.log("fullStr:", fullStr);

var cond: boolean = false; // 0
var cond1: boolean = true; // all other numbers

// Conditional Operators || Compare

var numb1: number = 10;
var numb2: number = 10;
var numb3: number = 12;
var strng2 = "10";

// var result = numb1 + num2 == numb2 + num1;
// var result = numb1 === strng2;
var result = numb1 == numb3;
// console.log("result", result);

var result1 = numb1 > numb3;
var result2 = numb1 < numb3;
var result3 = numb1 <= numb3;
var result4 = numb1 >= numb3;

// console.log("result1", result1);
// console.log("result2", result2);
// console.log("result3", result3);
// console.log("result4", result4);

var result5 = numb1 !== numb3;
// console.log("🚀 ~ result5:", result5);

// Logical Operators
// OR AND NOT
// ||  &&   !

// var output = n1 + n2 + ++n1;
var n1: number = 10;
var n2: number = 20;

++n1; //11
n2++; //21
// var output: number = !(--n1 + --n2 + 10 + n2 + ++n1 * 0 !== 71);
// console.log("🚀 ~ output:", output);

// Conditional Statements
var age: number = 15;
// IF
if (age >= 18) {
  console.log("You are eligible.");
}

// var marks = 55;
// var condit = marks > 33;
// var a = 2;
// If else
// if (condit) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }

// If Else IF

// if (marks > 80 && marks <= 100) {
//   console.log("A Grade");
// } else if (marks > 70) {
//   console.log("B Grade");
// } else if (marks > 40 && marks < 50) {
//   console.log("E Grade");
// } else if (marks > 50) {
//   console.log("D Grade");
// } else if (marks < 33) {
//   console.log("Fail");
// } else {
//   console.log("Invalid Input");
// }

// keyword(){

// }

var attendance = 80;
var theoryMarks = 50;
var practicalMarks = 50;
// Nested IF
if (attendance > 75) {
  console.log("Attendance is OK");
  if (theoryMarks > 50) {
    console.log("Theory is OK");
  } else {
    console.log("Fail in Theory");
  }
  if (practicalMarks > 50) {
    console.log("practical is OK");
  } else {
    console.log("Fail in practical");
  }
} else {
  console.log("Attendance is not OK");
}

var ATMPin = 1010;
var ATMPinInput = 1234;

if (ATMPinInput > 999 && ATMPinInput < 10000 && ATMPinInput === ATMPin) {
  console.log("Valid");
} else {
  console.log("Invalid");
}

var units = 100;
var pricePerUnit = 10;
var price = units * pricePerUnit;

if (units > 0 && units <= 100) {
  var tax = (price * 5) / 100;
  console.log("Tax: " + tax);
  var totalPrice = price + tax;
} else if (units > 100 && units <= 200) {
  var tax = (price * 10) / 100;
  console.log("Tax: " + tax);
  var totalPrice = price + tax;
}
