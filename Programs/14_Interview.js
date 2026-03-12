// obect will hold function and explain
const person = {
    nameFirst:"Medhu",
    age:3,
    greet:function(){
        console.log("my name is" + this.nameFirst)
    } 

}
person.greet();

//create anonams function

const greet=function(name){
    return "hello my name" +name;
}

console.log(greet);

//A classic programming interview qution that involves using array methods(filter,map,reduce)
//and javascript objects
// create an array of objects represnting students with their names and acores and get the below result
//filters out students who passed in the exam with score more then 36.
// update passed students names to upper case
//total score os all passing student

let students=[{name:"Alice",score:76},
    {name:"Bindu",score:89},
    {name:"mahi",score:32},
    {name:"Harsh",score:23},
    {name:"Spand",score:98}]

    let passedStudent=students.filter(student=> student.score>=36);
    console.log(passedStudent);

    let upperCasePassedStudent=passedStudent.map(student=>student.name.toUpperCase());
    console.log(upperCasePassedStudent);

    const totaloScore=passedStudent.reduce(function(acc,student){
        acc=acc+student.score;
        return acc;
    },0)
    console.log(totaloScore);