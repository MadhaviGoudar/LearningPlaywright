let sta=["pass","fail","skip"];
console.log(sta);
console.log(sta.length); //length of the array
console.log(sta.at(-1)); // it will print from last one
console.log(sta.at(-2)); //it will print from last second
sta[1]="blocked"; // it will modify
console.log(sta);


let arr = [10,20,30,40];
arr.push(50); //adding number last
console.log(arr);
arr.pop(); // removing number last
console.log(arr);
arr.unshift(5); // adding number first
console.log(arr);
arr.shift();
console.log(arr);// removing from first

// splice (start, deletcount ... item to add)
console.log("--------------------------------------");
arr.splice(1,2); // 1 is index number and 2 is 2 elements need to delete from index 1
console.log(arr);
arr.splice(1,1,90); //it will replce firest index
console.log(arr);
arr.splice(1,2,90,80);
console.log(arr);
