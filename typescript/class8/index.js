"use strict";
// Objects
let ali = ["Ali", "22", "false"];
let person1 = {
    name: "Ali",
    age: 22,
    isMarried: false
};
let car = {
    model: "Crown",
    company: "Toyota",
    modelYear: 2024,
    color: "Black",
    price: 100000000000000,
    registration: {
        number: 1045,
        city: "Islamabad",
        date: 2024
    }
};
console.log(car["registration"]["number"]);
