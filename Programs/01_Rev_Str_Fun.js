
//using split
let str="Hello Bangalore";
let revstr= str.split("").reverse().join("");
console.log(revstr);



//using for loop
let str1="Hello Testing";
let revstr1="";
for(let i=str1.length-1;i>=0;i--){
    revstr1+=str1[i];
}
console.log(revstr1);