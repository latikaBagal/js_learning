console.log("===============Count the total numbr of vowels=======================================");
var str="I am very good It Developer";
var vowels="aeiou";
var counter=0;
for (let index = 0; index < str.length; index++) {

    var ch=str.charAt(index);
  var chLowerCase=ch.toLowerCase();
  if (vowels.includes(chLowerCase)){
    counter++;
}
    
}
console.log(counter);


console.log("==================Sum of cube of numbers from 1 to 5===============================================");
var sumOfCube = 0;
for (let i = 1; i <=5; i++) {
    var cube=i*i*i;
    sumOfCube= sumOfCube +cube ;
}
console.log(sumOfCube);

console.log("=================================Odd position character===========================================");
function oddPositionedChar(str){
for (let index = 0; index < str.length; index++) {
   var ch=str.charAt(index);
  if (index%2==1 && ch !=' ') {
    console.log(ch);
  }  
}
}
oddPositionedChar("Hard work always pays back")
oddPositionedChar("Soon I will be UI IT Champ")