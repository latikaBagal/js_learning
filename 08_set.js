var setRollNum=new Set();
setRollNum.add(10);
setRollNum.add(20);
setRollNum.add(30);
setRollNum.add(20);
setRollNum.add(15);
console.log(setRollNum);

 console.log("=====The size of set is:======size property");
console.log(setRollNum.size);
console.log("==========Delete element in set delete()========= ");
setRollNum.delete(30);
console.log(setRollNum);
console.log("====to find element in set using.. has()=====");
console.log(setRollNum.has(30));

console.log("=============Traverse the set================================");

for (const element of setRollNum) {
   console.log(element); 
}

console.log("====Remove the duplicate element==========");
var array= [40,20,30,40,15,30,20];  //traverse array add element in new set
const mySet=new Set();
for (const element of array) {
   mySet.add(element);
}
console.log(mySet); // when traverse array set store unic element
//array= [...mySet];  //instead of following step we can use this step to add myset unic element into array 
//console.log(array);
const newArray=[]; 
for (const element of mySet) { //traverse set in set element add in newarray
   newArray.push(element);
}
console.log(newArray); // in this array get unic element
array=newArray; //add new unic element into existing array
console.log(array);

console.log("second way to remove duplicate element");
var array= [40,20,30,40,15,30,20];
 array=[...new Set(array)];
console.log(array);

