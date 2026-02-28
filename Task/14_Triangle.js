//Write a program that classifies a triangle based on its side lengths.
// Given three input values representing the lengths of the sides,
//  determine if the triangle is equilateral (all sides are equal),
//  isosceles (exactly two sides are equal), 
// or scalene (no sides are equal).
//  Use an if-else statement to classify the triangle.

let s1=30;
let s2=75;
let s3=75;
let range=s1+s2+s3;
//if(range<=0 || range>=180 || range===180)
if(range!==180){
    console.log("Invalid triangle");
    return;
}
if(s1===s2 && s2===s3 && s1===s3){
    console.log("equilateral");
} else if(s1===s2 || s2===s3 || s1===s3){
    console.log("isosceles");
}else{
   console.log("scalene"); 
}
