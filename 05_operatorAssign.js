console.log("================Step 1==============================");
function squareOfWordLength(argOne){
     var len=argOne.length; 
     var result=len * len;
     
     
     
    
   
   return {length:len,square:result};
}

     
var resultValue=squareOfWordLength("JavaScript");
console.log(`Length of javascript is:${resultValue.length} And it's square is:${resultValue.square}`);
var resultValue =squareOfWordLength("Google Chrome");
console.log(`Length of Google Chrome is:${resultValue.length} And it's square is:${resultValue.square}`);
var resultValue=squareOfWordLength("Developer Smart");
console.log(`Length of Developer Smart is:${resultValue.length} And it's square is:${resultValue.square}`);

console.log("=================Step 2=======================================");
function show(){
var str="I am Angular Developer";
var result=str.length;
console.log(`The given length is:${result}`);
var words=str.split(" ");
console.log(` total no of word available  string is:${words.length}`);
var result=str.length/str.split(" ").length;
console.log(`Division result is:${result}`);

console.log("===================Step 3===========================");
var result=str.length*str.split(" ").length;
console.log(`Multiplication is :${result}`);
}
show();