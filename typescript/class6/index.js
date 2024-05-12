"use strict";
let name1 = "Abu Hurairah";
let name2 = "Naveed";
let name3 = "Usman";
// Array
// const aajKiClass = (nu: number) => {
//   return nu;
// };
// let names = ["Abu Hurairah", "Naveed", "Usman", "Ali", "Hassan"];
// console.log("Before adding", names);
// names.push("Rauf");
// console.log("After adding rauf", names);
// let addName = "Akbar";
// let adding = names.push(addName, "Adnan", "Abdul Rehman");
// console.log("🚀 ~ adding:", adding);
// console.log("after adding", names);
// let removing = names.pop();
// console.log("🚀 ~ removing:", removing);
// console.log("After Removing", names);
// let returned = names.unshift("Shafique", "Waseem", "Bilal", "Haider");
// console.log("🚀 ~ returned:", returned);
// console.log("After adding at start", names);
// let removed = names.shift();
// console.log("🚀 ~ removed:", removed);
// console.log("After Removing at start", names);
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// numbers.pop();
// numbers.push(7);
// numbers.push(7);
// numbers.push(7);
// numbers.shift();
// numbers.push(7);
// numbers.unshift(7 - 6);
// numbers.unshift(7 - 0);
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.pop();
// numbers.push(10);
// console.log(numbers);
// 71234510(2)
// 76702345610
// 17234510
let newArray = ["Abu Hurairah", "Naveed", "Ali", "Adnan"];
// newArray.splice(1, 0, "Adnan");
// ["Abu Hurairah", "Adnan", "Naveed", "Ali"];
// newArray.splice(newArray.length, 0, "Waseem", "Bilal");
// console.log("🚀 ~ newArray:", newArray);
// newArray.splice(newArray.length / 2, 1, "`Waseem");
// console.log("🚀 ~ Afterdeleting", newArray);
// todo list
// [wakeup, walk for 30 mins, ....]
// update lunct to lunch with friend
// Delete Dinner
// add Rest for 15 minute after lunch
// let todos = [
//   "Wake up",
//   "Prayer",
//   "Breakfast",
//   "university",
//   "Lunch",
//   "assignment",
//   "dinner",
// ];
// todos.splice(4, 1, "Lunch With Friend");
// todos.splice(todos.length - 1, 1);
// todos.splice(5, 0, "rest");
// console.log(todos);
// DataTypes
// let newArr: string[] = [];
// tuple
// let tple: [string, number] = ["Abu Hurairah", 21];
// let tuple2: [...number[]] = [21, 48392, 74091283, 817234, 89742, 5849];
// Slicing
// let newArr: string[] = ["Abu Hurairah", "Naveed", "Ali", "Adnan", "Rauf"];
// let returnedArr = newArr.splice(0, 1);
// let returnedVal = newArr.pop();
// console.log("🚀 ~ returnedVal:", returnedVal);
// console.log("🚀 ~ returnedArr:", returnedArr);
// newArr[1] = "Rauf";
// let index = newArr.lastIndexOf("Rauf");
// console.log("🚀 ~ index:", index);
// console.log(newArr);
// Loops
let nums1 = [1, 3, 5, 7, 9, 11, 13];
let nums2 = [2, 4, 6, 8, 10, 12, 14];
let result = [];
let i = 0;
while (i < nums2.length) {
    let sum = nums1[i] + nums2[i];
    result.push(sum);
    i++;
}
console.log(result);
while (i < nums2.length) {
    result.push(nums1[i]);
    result.push(nums2[i]);
    i++;
}
