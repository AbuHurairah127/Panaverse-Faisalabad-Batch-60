"use strict";
// function hello() {
//   console.log("Hello, World from inside a function!");
// }
// // function name(){} //syntax
// console.log("Hello World");
// hello();
// function add() {
//   var num1 = 10;
//   var num2 = 20;
//   console.log("Answer is ", num1 + num2);
// }
// addWithParams(10, 20);
// function addWithParams(num1: number, num2: number) {
//   console.log("Answer is ", num1 + num2);
// }
// function login(email: string, password: string) {
//   console.log(email, password);
// }
// const val = () => {
//   console.log("Welcome to arrow functions");
// };
// const sumWithReturn = (numb: number) => {
//   var num1 = 10;
//   return num1 + numb;
// };
// console.log(sumWithReturn(10));
// var resp3 = sumWithReturn(10);
// var resp4 = sumWithReturn(20);
// var val = 10;
// const data = () => {
//   console.log("Hello World");
//   if (val === 10) {
//     val++;
//     data();
//   }
// };
// data();
const _print = (value) => {
    console.log("VAlue inside functions", value);
};
const sum = (num1, num2) => {
    _print(num1 + num2);
    return num1 + num2;
};
var value2 = sum(10, 20);
