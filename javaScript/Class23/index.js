//creating objsct

// const person={
//     fristName:'Jhon',
//     lastName:'Doe',
//     age:30
// };
// // let {fristName,lastName,country="BD"}=person;
// //console.log(person.fristName);
// let{fristName:name}=person;
// console.log(name);
// let name=new String('Bangladesh');
// console.dir(name);
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
// let [fruit1,,,fruit2]=fruits;
// console.log(fruit2);
// const numbers = [10, 20, 30, 40, 50, 60, 70];
// let[a,b,...other]=numbers;
// console.log(other)

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
  
//   // Destructing
//   let text = "";
//   for (const [k,v] of fruits) {
//     console.log(k);
//     console.log(v);
//   }
function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
  }
console.log(bin2dec(10101));