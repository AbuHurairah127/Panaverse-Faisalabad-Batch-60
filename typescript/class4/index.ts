// switch ... case
// var dayNum: number = 2;
// switch (dayNum) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Invalid day");
//     break;
// }

// if (2024 % 4 === 0) {
//   console.log("leap year");
// } else {
//   console.log("not a leap year");
// }

var monthName: string = "feb";
// If else inside switch case
switch (monthName) {
  case "jan":
    console.log("1-31");
    break;
  case "feb":
    if (2024 % 4 === 0) {
      console.log("2-29");
    } else {
      console.log("2-28");
    }
    break;
}

// Mutiple cases with single output
// switch (monthName) {
//   case "jan":
//   case "mar":
//   case "may":
//   case "july":
//   case "aug":
//   case "oct":
//   case "dec":
//     console.log("Days are 31");
// }
