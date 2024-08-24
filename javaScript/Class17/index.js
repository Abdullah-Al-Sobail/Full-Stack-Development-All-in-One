// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi","BMW"];
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);

// for(let x=0;x<5;){
    // console.log('Hi',x);
    // if(x==2){
    //     break;
    // }else{

        // console.log(`${x+1}.`,cars[x]);
        // x++;
    // }
   
// }
// console.log('loop end');
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi","BMW"];

// console.log(cars);
// console.log();

//for in loop
// const person = {fname:"John", lname:"Doe", age:25};
const numbers = [45, 4, 9, 16, 25];
// for(let x in person){
//     console.log(person[x]);//person['fname']=Jhon

// }
numbers.forEach(find);

function find(value,index,num){
    console.log(`${index+1}.${value}`);
    console.log(num);
}