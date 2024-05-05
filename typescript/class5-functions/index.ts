// Functions
function printer() {
  console.log("Inside Functions");
}
// Naming Conventions
// camelCase
// snake_case
// PascalCase
// ALL CAPS

// Function syntax
function specificName() {
  // code to execute
}

// console.log("1");
// console.log("2");
// console.log("3");
// printer();
// printer();
// printer();
// printer();
// console.log("4");
// console.log("5");
// console.log("6");

// var value = "Testing";
// console.log(value.toUpperCase());
// console.log(value);
// console.log(value);

function percentageCalculator() {
  var obtainedMarks: number = 195;
  var totalMarks: number = 250;
  var percentage: number = (obtainedMarks / totalMarks) * 100;
  console.log("Percentage=>", percentage);
  return percentage;
}

var returneۙdValue = percentageCalculator();
console.log("🚀 ~ returneۙdValue:", returneۙdValue);
function percentageCalculatorWithParameters(
  obtainedMarks: number,
  totalMarks: number
) {
  var percentage: number = (obtainedMarks / totalMarks) * 100;
  return percentage;
}

var value: number = percentageCalculatorWithParameters(235, 250);
// console.log(
//   "Percentage outside function",
//   percentageCalculatorWithParameters(235, 250)
// );

function respGen(percentage: number) {
  if (percentage >= 50) {
    return "Pass" + " " + percentage + "%";
  }

  return "Fail" + percentage;
}
// var resp = respGen(percentageCalculatorWithParameters(50, 250));
// var resp2 = respGen(percentageCalculatorWithParameters(180, 250));
// console.log("🚀 ~ resp:", resp);
// console.log("🚀 ~ resp2:", resp2);

// function nationalityChk(nationality: string) {
//   if (nationality.trim().toLowerCase() === "pakistani") {
//     return true;
//   }
//   return false;
// }

// function chkAge(age: number) {
//   if (age > 17) {
//     return true;
//   } else if (age > 0 && age < 18) {
//     return false;
//   }
//   return false;
// }

// function chkConditions(age: number, nationality: string) {
//   if (age > 17 && nationality === "pakistani") {
//     return true;
//   }
//   return false;
// }

// function chkValidity() {
//   if (chkAge(21) && nationalityChk("PakistaNi")) {
//     console.log("You can cast vote");
//   } else {
//     console.log("You can't cast vote.");
//   }
// }

// chkValidity();

// !IMP: function syntax with return type
// function functionName():returnType{
//   return value
// }

// function testing(): void {
//   console.log("Abu Hurairah");
// }

// !Arrow Functions
const arrFunc = () => {
  console.log("Arrow Function");
};

const arrFunctWithParameters = (val: string): void => {
  console.log("Val", val);
};
const arrFunctionWithReturn = (val: string): string => {
  return val;
};

var _value = arrFunctionWithReturn("Testing");
console.log("🚀 ~ value:", arrFunctionWithReturn("Testing"));

// !Lambda Functions
const product = (num1: number) => num1;
const sum = (num1: number) => {
  return num1 + 10;
};

console.log("Sum is ", sum(10));

const _userName = (firstName: string, lastName: string) => {
  console.log(firstName + lastName);
};
const _userName2 = (lastName: string, firstName?: string) => {
  if (lastName) {
    console.log("LastNAme exists");
  } else {
    console.log("LastName don't exist");
  }
};
_userName2("Abu Hurairah");
_userName2("Naveed", "Sarwar");

const _userName3 = (firstName: string, lastName: string = "Khan") => {
  console.log(firstName + lastName);
};

_userName3("Zia");
_userName3("Naveed", "Sarwar");
