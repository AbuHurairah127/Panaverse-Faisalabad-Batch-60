"use strict";
// Assignment Solution
// const addValueInArray = (arr: string[], index: number, value: string) => {
//   let newArr = arr.slice(0);
//   newArr.splice(index, 0, value);
//   return newArr;
// };
// const returnedValue = addValueInArray(["Abu Hurairah", "Naveed"], 1, "Azhar");
// console.log("🚀 ~ returnedValue:", returnedValue);
// let myName = "AbuHurairah";
// console.log(myName[0]);
// console.log(myName.slice(0));
// -----------------------------------------
// Functions Revision
// const addTwoValues = (num1: number, num2: number) => {
//   return num1 + num2; //xyz123
// };
// const functionAsParam = (
//   func: (num: number, num5: number) => number,
//   withMultiply: number
// ) => {
//   return func(20, 30) * withMultiply;
// };
// const ans = functionAsParam(addTwoValues, 10);
// console.log("🚀 ~ ans:", ans);
// const returnAValue = (val: string) => {
//   return val;
// };
// const concatString = (
//   returnAValue: (variable: string) => string,
//   concat: string
// ) => {
//   let returnedValue = returnAValue("Testing");
//   console.log("🚀 ~ concatString ~ returnedValue:", returnedValue + concat);
// };
// concatString(returnAValue, " my program");
// ---------------------------
// Loops
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + 10);
// }
// let k = 0;
// do {
//   console.log("Testing");
//   k++;
// } while (k < 0);
// ---------------------------------
/* `Map`, `Filter`, and `Foreach`*/
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arrayMethod = (abc: number, index: number) => {
//   if ((index + abc) % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };
// let mapReturn = arr.map(arrayMethod);
// console.log("🚀 ~ mapReturn:", mapReturn);
// const names = ["Abu Hurairah", "Naveed", "Azhar", "Usman"];
// const namesUpdate = (nam: string, index: number) => {
//   if (nam === "Usman") {
//     return "M. Usman";
//   }
//   return nam;
// };
// const newNames = names.map(namesUpdate);
// console.log("🚀 ~ newNames:", newNames);
// let nums = [-1, 2, 3, -5, 4, -9, 8, -8, -8, -8];
// const customFunction = (val: number) => {
//   if (val < 0) {
//     console.log("Negative");
//     return "Negative";
//   } else {
//     console.log("Positive");
//     return "Positive";
//   }
// };
// const data = nums.map(customFunction);
// console.log("🚀 ~ data:", data);
// const names = [
//   "Ali",
//   "Usman",
//   "Azhar",
//   "Naveed",
//   "Abu Hurairah",
//   "Ramzan",
//   "Rizwan",
//   "Sultan",
//   "Mahad",
//   "Zain",
//   "Imran",
// ];
// const findName = (name: string) => {
//   return name.length;
// };
// const namesLength = names.map((name: string) => {
//   return name.length;
// });
// console.log("🚀 ~ namesLength:", namesLength);
// const nums1 = [1, 2, 3, 4, 5, 6, 7];
// const nums2 = [7, 6, 5, 4, 3, 2, 1];
// const newArr = nums1.map((val: number, index: number) => {
//     return val + nums2[index];
// });
// console.log("🚀 ~ newArr ~ newArr:", newArr);
// ---------------------------------
// Filter
// const nums1 = [1, 2, 3, 4, 5, 6, 7];
// const filteredArr = nums1.filter((val: number, index: number) => {
//   if (index < 2) {
//     return true;
//   }
// });
// console.log("🚀 ~ filteredArr ~ filteredArr:", filteredArr);
const names = [
    "Ali",
    "Usman",
    "Azhar",
    "Naveed",
    "Abu Hurairah",
    "Ramzan",
    "Rizwan",
    "Sultan",
    "Mahad",
    "Zain",
    "Imran",
];
const filteredNames = names.filter((name) => {
    if (name !== "Abu Hurairah") {
        return true;
    }
});
console.log("🚀 ~ filteredNames ~ filteredNames:", filteredNames);
