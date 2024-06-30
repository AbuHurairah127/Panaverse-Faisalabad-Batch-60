// const enum USER_ROLES {
//   STUDENT = "Student",
//   TEACHER = "Teacher",
//   HEAD = "Head",
// }
let vals = ["a", "b", "c"];
const customarray = ["Abc", 10, "BCD"];
// const data: person = {
//   name: "Abu Hurairah",
// //   run: (val) => val.length,
// };
let person1 = {
    name: "Abu Hurairah",
    age: 21,
};
let person2 = {
    name: "Naveed Sarwar",
    age: 28,
    designation: "CEO Techloset",
};
// person1 = person2;
// console.log(person1);
// const data = await fetch("https://dummyjson.com/products");
// const resp = await data.json();
// console.log(resp);
// ---------------------------
// OOPs (Object Oriented Programming)
// class Human {
//   name: string = "";
//   age: number = 0;
//   constructor(_name: string, _age: number) {
//     this.name = _name;
//     this.age = _age;
//   }
// }
// const human = new Human();
// console.log(human, "Before updation");
// human.name = "Abu Hurairah";
// human.age = 21;
// console.log(human);
// const human2 = new Human();
// human2.name = "Naveed Sarwar";
// human2.age = 21;
class Human {
    name = "";
    age = 0;
    password = "test";
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
        this.password = "Parameter value";
    }
    get Password() {
        return this.password;
    }
    set newPassword(pass) {
        this.password = pass;
    }
}
const human = new Human("Abu Hurairah", 21);
human.newPassword = "NewPass";
console.log("🚀 ~ human:", human.Password);
export {};
