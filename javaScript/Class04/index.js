
// const studentInfo={
//    firstName:'Jhon', 
//    age:30,
//    lastName:'Doe',
//    lang:{
//     fristLnag:'Bangla',
//     secondLang:'English',
//     optional:'Urdu'
//    },
//    fullName:function(){
//     return 'our new student is :'+(this.firstName+" "+this.lastName).toUpperCase()
// }
// }

// studentInfo.language='Bangla';
// delete studentInfo.lastName;
// let x='firstName';
// console.log(studentInfo['firstName']);
// console.log(studentInfo.lastName);
// console.log(studentInfo[x]);
// console.log(studentInfo.fullName());
// document.write(Object.values(studentInfo));
// document.write(JSON.stringify(studentInfo));
// const studentInfo={
//     name:'Jhon',
//     age:20,
//     gender:'Male',
//     country:'BD'

// }
//studentInfo2=new Object(
//     name:'Doe',
//     age:25,
//     gender:'Male',
//     country:'USA'

// )
function Student(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
// Student.prototype.message=function(){
//     return 'Hello I am Protoype method';
// }
// Student.nationality;

const student1=new Student('jhon',20,'Male','Eng');

console.log(Student.nationality);
console.log(student1);
const student2=new Student('Doe',30,'Female');
console.log(student2);