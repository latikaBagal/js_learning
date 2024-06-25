 console.log("================Step 1============================");
 var graterNum=function(numOne,numTwo){
var result=numOne>=numTwo?numOne:numTwo;
console.log(`Grater number from numbers:${numOne},${numTwo} is${result}`);

}
graterNum(10,-10);
graterNum(800,899);

console.log("=====================Step 2===============================");
function isEvenOrOdd(argOne){
 var result=argOne%2==0?"true":"false"
return result;
}

var value1=isEvenOrOdd(29);
console.log(`Given number is even or odd 29:${value1} `);
var value2=isEvenOrOdd(44);
console.log(`Given number is even or odd 44:${value2} `);
var value3=isEvenOrOdd(0);
console.log(`Given number is even or odd 0:${value3} `);
var value4=isEvenOrOdd(101);
console.log(`Given number is even or odd 101:${value4} `);

console.log("=====================Step 3===============================");
function wordLength(argOne){
 var result=argOne.length%2==0?"even":"odd"
return result;
}
var returnResult=wordLength("javascript");
console.log(`the given string is even or odd "java" ${returnResult},`);
var returnResult=wordLength("Developer");
console.log(`the given string is even or odd "Developer" ${returnResult}`);
var returnResult=wordLength("Google");
console.log(`the given string is even or odd "Google" ${returnResult}`);

