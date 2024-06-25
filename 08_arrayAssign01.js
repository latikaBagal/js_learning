var fruits_seasonal=["Banana", "Orange","Apple","Mango","Water Melon"];
var firstEle=fruits_seasonal[0];
 console.log(`The first element in arry is: ${firstEle}`);

 var lastEle=fruits_seasonal[fruits_seasonal.length-1];
 console.log(`The last element in arry is: ${lastEle}`);
 console.log("========================================================================");


console.log("============Add element papaya before the element: 'Banana'=============");
console.log(fruits_seasonal);
 fruits_seasonal.unshift("papaya");
 console.log(fruits_seasonal);

 console.log("============Remove Mango from the array===============================");
 console.log(fruits_seasonal);
 var removeElement=fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);
 
 
 console.log("=============Insert element 'pineapple' at the last position==============");
 console.log(fruits_seasonal);
 fruits_seasonal.push("pineapple");
 console.log(fruits_seasonal);


console.log("=====================Insert an element 'Dragon fruit'before 'watermelon' ==========");
console.log(fruits_seasonal);
 var addElement=fruits_seasonal.splice(4,0,"Dragon fruit");
 console.log(fruits_seasonal);

 console.log("=====================Replace an element 'Orange' With 'Kiwi' ==========");
 console.log(fruits_seasonal);
 var replaceEle=fruits_seasonal.splice(2,1,"Kiwi");
 console.log(fruits_seasonal);

 console.log("=====================Log the element from index 1 to 4 ==========");
 console.log(fruits_seasonal);
 var result=fruits_seasonal.slice(1,5);
console.log(result);

console.log("=====================Only select last 3 element an log on console ==========");
console.log(fruits_seasonal);
var result=fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(result);