// objects is collection of properties 
let person={
    firstName:'Medhu',
    lastName:'Banakar',
    age:24,
    fullName:function()
    {
        console.log(this.firstName+this.lastName);
    }
}
console.log(person.fullName());
console.log(person.firstName);
person.firstName='Bujji'
console.log(person.firstName);
person.gender='mele';
console.log(person);
delete person.gender;
console.log(person);
//check gender is present or not
console.log('gender' in person);



//print all the properties in person obeject 

for(let key in person)
{
    console.log(person[key]);
}
