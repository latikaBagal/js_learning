var greet = "Good Morning";
console.log(`find total number of characters from the string${greet}`);
var totalChar=greet.length;
console.log(`Total character is:${totalChar}`);

// Method
console.log("===========charAt()=================================");
var char=greet.charAt(3);
console.log(`char at index 3 is:${char}`);

console.log("=================indexOf()=================================");
var index=greet.indexOf("M");
console.log(`Index of char M is:${index}`);

console.log("====================concat()======================================");
var firstName="jenny";
var lastName=" sharma";
var result=firstName.concat ( lastName);
console.log(`concat string is: ${result}`);

console.log("====================toUpperCase()======================================");
 var lastName="bagal";
 var result=lastName.toUpperCase();
console.log(`last name in upper case is:${result}`);

console.log("=====================replace()=============================================");
var greet="Good Morning";
var result=greet.replace("Good","Afteroon");
console.log(`After replace: ${result}`);

console.log("=====================trim()=============================================");
var city="  pune   ";
console.log(`length before trim is: ${city.length}`);
city=city.trim();

console.log(`length after trim is: ${city.length}`);

console.log("=====================include()=============================================");
var greet="Good Morning";
var result=greet.includes("nin");
console.log(`Is "nin" includes:${result}`);
var result=greet.includes("z");
console.log(`Is "z" includes:${result}`);

console.log("=========================split()===============================================");
var myName="Latika Bagal";
var result=myName.split(" ");
console.log(` Total number of words ${result.length}`);

var word="My life my rule";
var result=word.split("u");
console.log(result);
console.log(`total number of words:${result.length}`);


