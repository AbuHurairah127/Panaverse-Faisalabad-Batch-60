import chalk from "chalk";
console.log(chalk.red("first log"));
// setTimeout(function,time)
// setTimeout(() => {
//   console.log("This will be printed late");
// }, 0);
// setInterval(function,time)
// let i = 0;
// const intervalId = setInterval(() => {
//   console.log(new Date());
//   i++;
//   if (i === 3) {
//     clearInterval(intervalId);
//   }
// }, 1000);
// const intervalId = setInterval(() => {
//   console.log("Interval Code");
//   clearInterval(intervalId);
// }, 1000);
console.log("Final log");
console.log("Final log");
console.log("Final log");
let data = {
    name: "Abu Hurairah",
};
// class Animal {
//   name: string = "";
// }
// let dog = new Animal();
// dog.name = "Bull dog";
// let cat = new Animal();
// cat.name = "Billy";
const promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        console.log("Testing");
        fulfill("Promise get successed");
    }, 1000);
});
promise
    .then((val) => {
    console.log(val);
})
    .catch((err) => {
    console.log(err);
});
