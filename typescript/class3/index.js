"use strict";
// Number || String
// +
var num1 = 15;
var num2 = 10;
var sum = num1 + num2;
// console.log(sum);
var firstName = "Abu ";
var lastName = "Hurairah";
// concatenation
var fullName = firstName + lastName;
// console.log("🚀 ~ fullName:", fullName);
var str1 = "20";
var str2 = "10";
var fullStr = 1 + num2 + str1;
// 10 + 10
// 2020
// console.log("fullStr:", fullStr);
var cond = false; // 0
var cond1 = true; // all other numbers
// Conditional Operators || Compare
var numb1 = 10;
var numb2 = 10;
var numb3 = 12;
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
var n1 = 10;
var n2 = 20;
++n1; //11
n2++; //21
// var output: number = !(--n1 + --n2 + 10 + n2 + ++n1 * 0 !== 71);
// console.log("🚀 ~ output:", output);
// Conditional Statements
var age = 15;
if (age >= 18) {
    console.log("You are eligible.");
}
// var marks = 55;
// var condit = marks > 33;
// var a = 2;
// if (condit) {
//   console.log("Pass");
// } else {
//   console.log("Fail");
// }
// // If Else IF
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
if (attendance > 75) {
    console.log("Attendance is OK");
    if (theoryMarks > 50) {
        console.log("Theory is OK");
    }
    else {
        console.log("Fail in Theory");
    }
    if (practicalMarks > 50) {
        console.log("practical is OK");
    }
    else {
        console.log("Fail in practical");
    }
}
else {
    console.log("Attendance is not OK");
}
var ATMPin = "1234";
console.log(ATMPin.length);
