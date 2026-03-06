module.exports =class Person
{
    age=25;
    get location()
    {
        return "Ind"
    }
    // constructor is a method which executes by default when you create a obeject of the class
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;

    }
    fullName()
    {
        console.log(this.firstName+this.lastName)
    }
}

// let person = new Person("Medhu","Banakar");
// let person1 = new Person("Tanmy","Banakar")
// console.log(person.age);
// console.log(person.location);
// person.fullName();
// person1.fullName();
