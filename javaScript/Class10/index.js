// const numbers=[[1,2],[3,4],[5,6]];
// console.log(numbers);
// console.log('--------------');
// console.log(numbers.flat());

// let spliceItem=fruits.splice(0,2,'Item1','Item2','Item3');
// fruits.splice(0,1);
// console.log(fruits.toSpliced(0,2,'Item1','Item2','Item3'));
// console.log(fruits);
// console.log(spliceItem);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits.shift();
// console.log(fruits);
// console.log(fruit);
// const fruits = ["Banana", "Orange", "Apple", "Mango","Orange",NaN];
// console.log(fruits.slice(3));
// console.log(fruits);
// console.log(fruits.indexOf('orange'));
// console.log(fruits.includes(NaN));
const numbers = [4, 9, 16, 25, 29];
let frist=numbers.find(myFun)
function myFun(value,index,array){
    return value>18
}
console.log(frist);