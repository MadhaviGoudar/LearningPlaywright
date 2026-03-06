let marks = [87,67,98,78,100,89]
subMarks=marks.slice(2,4);
console.log(subMarks);
console.log(marks);
marks[3]=80; // replace 3rd index
console.log(marks);
console.log(marks.length);
marks.push(65); // adding last
console.log(marks);
marks.pop();  //deletting last
console.log(marks);
marks.unshift(90); // adding first
console.log(marks);
console.log(marks.indexOf(100)); // index of
console.log(marks.includes(120)); // its check value present in array or not
// print the all array numbers
for(let i=0; i<marks.length; i++)
{
    console.log(marks[i]);
}

// sum of all array numbers

sum=0;
for(let i=0; i<marks.length; i++)
{
    sum=sum+marks[i];
}
console.log(sum);

// reduce filter map
let totalMarks=marks.reduce((sum,mark)=>sum+mark,0);
console.log(totalMarks);

// create new array with even numbers of scores array
var scores=[68,55,89,54,90]
var evenNumber=[];
for(let i=0; i<scores.length; i++)
{
    if(scores[i] %2 == 0)
    {
        evenNumber.push(scores[i]);
    }  
}
console.log(evenNumber);

//using filter method -create new array with even numbers of scores array

let newFilterEvenScore= scores.filter(score=>score%2==0)
console.log(newFilterEvenScore);

//create new array with even numbers of scores array and multiply with 3 each array
// using map and add all the array numbers

mappedArray=newFilterEvenScore.map(score=>score*3)
console.log(mappedArray);

totalValue=mappedArray.reduce((sum,val)=>sum+val,0);
console.log(totalValue);

//using chain all method
//filter even number
//multiply with 3
//add all the value
num=[67,89,45,34,56,40]
value=num.filter(number=>number%2==0).map(number=>number*3).reduce((number1,num)=>number1+num,0);
console.log(value);

//array sortting
let fruit=["banana","orange","pomo","apple"]
fruit.sort();
console.log(fruit);
let ex=[89,78,98,5,34]
ex.sort((a,b)=>a-b)
console.log(ex);

