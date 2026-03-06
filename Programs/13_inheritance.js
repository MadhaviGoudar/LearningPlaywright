//Inheritance is main pillor of object oriented programming
//one class can inherit or acquiee the properties, methods of the another class
//one class can inherit or acquiee the properties, methods of the another class is know as subclass
const Person = require('./12_class')
class Pet extends Person
{
    constructor(firstName,lastName)
    {
        super(firstName,lastName)
    }
}
let pet=new Pet("Kiran","Banakar");
pet.fullName();
console.log(pet.location);