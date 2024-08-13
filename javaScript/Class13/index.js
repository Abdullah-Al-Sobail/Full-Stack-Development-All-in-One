// const d = new Date("2021-03-25");

// console.log(d);
// console.log(d.getSeconds());
// const studentInfo={
//     name:"sakib",
//     age:23

// }
// console.log(studentInfo.name);
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const d = new Date();
// // console.log(d.getMonth());
// let month = months[d.getMonth()];
// // console.log(months[0])
// console.log(month);
let text = "";
const today = new Date();//current date
const someday = new Date();//current date
someday.setFullYear(2100, 0, 14);
console.log(today.getTime());
console.log(someday.getTime());
// if (someday > today) {
//   text = "Today is before January 14, 2100.";
// } else {
//   text = "Today is after January 14, 2100.";
// }
// console.log(text);