
// let x=5.6;
// let y=5.5;
// let z=5.4;
// let w=-5.4;
// let zero=0;
// console.log(Math.round(x));
// console.log(Math.round(y));
// console.log(Math.round(z));
// console.log(Math.round(w));
// console.log(Math.ceil(x));
// console.log(Math.ceil(y));
// console.log(Math.ceil(z));
// console.log(Math.floor(x));
// console.log(Math.floor(y));
// console.log(Math.floor(z));
// console.log(Math.floor(w));
// console.log(Math.trunc(x));
// console.log(Math.trunc(y));
// console.log(Math.trunc(z));
// console.log(Math.trunc(w));
// console.log(Math.sign(x));
// console.log(Math.sign(w));
// console.log(Math.sign(zero));
// console.log(Math.pow(8,3));
// console.log(Math.sqrt(64));
// console.log(Math.abs(-4.5));
// console.log(Math.sin(45*Math.PI/180));
// console.log(Math.min(0, 150, 30, 20, -8,-200));
// console.log(Math.max(0, 150, 30, 20, -8,-200));
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10+1));
function getIntiger(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;

}
console.log(getIntiger(5,10));
console.log(getIntiger(0,100));