// Grade Calculator:
// Write a program that calculates and displays the 
// letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59

 let score=78;
 switch(score){
    case (score>=90):
        console.log("Grade A");
        break;
    case (score>=80):
        console.log("Grade B");
        break;  
    case (score>=70):
        console.log("Grade C");
        break;  
    case (score>=60):
        console.log("Grade D");
        break;  
    default:
        console.log("Grade F");
 }