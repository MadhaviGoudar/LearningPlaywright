// var , let , const
// var is function scoped and let and const is a block scoped
// var can be redeclared and reasigned

//var example
// var a=10;
// var a=20;
// console.log(a);
// // a value is now 20

// if(true){
//     var a=30;
// }
// console.log(a)


// let is function scoped so it is accessible outside the block and it will override the previous value of a
function test(){
    console.log("Hello");
 let b=40;
 console.log(b);
 if(true){
    let b=50;
    console.log(b);
 } 
    console.log("let->" ,+ b);  
}
 test();
