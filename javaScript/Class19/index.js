// const letters = ["a","b","c","b"];
// // console.log(letters);
// for(let x of letters){
//     console.log(x);
// }
// const letters = new Set(["a","b","c"]);
// console.log(letters);
// const obj={
//    name:"rahim"
// }
// for(let x in obj){
//     console.log(typeof x);
// }
// console.log(obj);
// const fruits = new Map([
//     [10, 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
// // for(let x of fruits){
// //     console.log(x[1]);
// // }
// console.log(fruits);
// function myFun(){
//     let x=0;
//     return{
//         next:function(){
//             x+=10;
//             return{value:x,done:false};
//         }
//     }
// }
// const count=myFun();
// // console.log(count.next().value);
// // console.log(count.next().value);
// // console.log(count.next().value);
// console.log(count);
// const myObj=new Array();
// console.log(myObj);
// const myObj={};
// myObj[Symbol.iterator]=function(){
//     let x=0;
//     done=false;
//     return{
//         next(){
//             x+=10;
//             if(x===100){
//                 done=true;
//             }
//             return{value:x,done:done}
//         }
//     }

const { set } = require("express/lib/application");

// }
// for(let y of myObj){
//     console.log(y);
// }
// const number=[1,3,5,6,8,40,50];
// // for(let x=0;x<number.length;x++){
// //     console.log(number[x]);
// // }
// for(let x of number){
//     console.log(x);
// }
// const letters=new Set(['a','b','c','d']);
// console.log(letters.size);
// const letters =new Set();
// letters.add('a');
// letters.add('b');
// console.log(letters);
const obj={
    name:"rahim",
    age:26
}
const letter=new Set(['a','b','c','d']);
document.write(letter instanceof Set);
console.log(obj instanceof Set);
