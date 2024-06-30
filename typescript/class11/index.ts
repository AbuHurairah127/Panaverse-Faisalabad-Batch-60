// const enum USER_ROLES {
//   STUDENT = "Student",
//   TEACHER = "Teacher",
//   HEAD = "Head",
// }

// type name = value;
type Alphabets = string[];

let vals: Alphabets = ["a", "b", "c"];

// type union = string | number;
// type intersection = string & number;

// let value: union = "10";
// let value2: intersection = "1023";

type unionArray = (string | number)[];

const customarray: unionArray = ["Abc", 10, "BCD"];
type name = "Abu Hurairah";

interface person {
  name: name;
  age: number;
  //   run: (val: string) => number;
}

// const data: person = {
//   name: "Abu Hurairah",
// //   run: (val) => val.length,
// };

let person1: person = {
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
  name: string = "";
  age: number = 0;
  private password: string = "test";
  constructor(_name: string, _age: number) {
    this.name = _name;
    this.age = _age;
    this.password = "Parameter value";
  }
  get Password() {
    return this.password;
  }
  set updatepass(pass: string) {
    this.password = pass;
  }
}

const human = new Human("Abu Hurairah", 21);
