
const Person = require('./12_class')
let day='Monday'
console.log(day.length)
let subday=day.slice(0,3);
console.log(subday);
console.log(day[1]);

let splitDay =day.split("n");
console.log(splitDay[1].length)
let date='23';
let nextDate='27';
let diff= parseInt(nextDate)- parseInt(date) //convertting string into integer
console.log(diff);
diff.toString();

let person =new Person("Medhu","Banakar");
let person1 =new Person("Tanmy","Banakar")
console.log(person.age);
console.log(person.location);
person.fullName();
person1.fullName();

