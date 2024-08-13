// const test=new Array();
// console.log(test);
// const numbers = [45, 4, 9, 16, 25];
// let item="";
// numbers.forEach(myFun);
// function myFun(value,index,array){
//     item +=1+index+'\n';
// }
// // document.write(item);
// console.log(item);
// console.log(numbers);
const numbers = [45, 4, 9, 16, 25];
// let finalOutput=numbers.map(towice);
// function towice(value,index,array){
//     return array;
// }
// console.log(finalOutput);
// console.log(numbers);
// let mapItem=numbers.flatMap(myFun);
// function myFun(x){
//     return x*2;
// }
let numberFilter=numbers.filter(testNumber);
function testNumber(value,index,array){
    return value>20;
}
console.log(numberFilter);
console.log(numbers);