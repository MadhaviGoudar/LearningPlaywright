//Test Case Result Counter
//After a test suite runs,
//  you receive an array of test results (strings: "pass", "fail", "skip"). 
// Write a JavaScript program using a for loop that counts how many tests
//  passed, failed, and were skipped.
//  Print a test report with total tests, counts, pass rate percentage, 
// and a verdict (all passed → ready for release, ≤2 failures → review, >2 failures → block release).

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];
let countPass=0;
let countFail=0;
let countSkip=0;
let totalTest=testResults.length;
for(let i=0; i<testResults.length; i++){
    if(testResults[i]==="pass")
    countPass++;

    else if(testResults[i]==="fail")
        countFail++;

    else if(testResults[i]==="skip")
        countSkip++;

}
    console.log(countPass + " Pass");
    console.log(countFail + " Fail");
    console.log(countSkip + " Skip");
    console.log(totalTest + " TotalTest");

// let passRate=100%(totalTest%countPass)
let passRate=(countPass/totalTest)*100;
console.log("Pass Rate:" + passRate + "%");


if(totalTest === countPass) // all pass
{
    console.log("Ready for release");
} else if(countFail <= 2 )
{
    console.log("Review");
} else
{
    console.log("Block");
}
