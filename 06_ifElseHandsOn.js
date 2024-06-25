console.log("======================Step 1================================");
var isEvenOrOdd=function(num){
    if (num%2==0) {
        return "Even";
    } else {
        return " Odd"
    }
    }
  var value= isEvenOrOdd(70);
  console.log(`Given no is 70 is:${value}`);
  var value= isEvenOrOdd(67);
   console.log(`Given no is 67 is:${value}`);
   var value= isEvenOrOdd(90);
   console.log(`Given no is 90 is:${value}`);

   console.log("==========================Step 2========================================");

  var voteEligibility= function(age){
  if (age>=18) {
    console.log(`You are eligible for vote`);
  } else {
    console.log(`You are not eligible for vote`);
  }
  }
  voteEligibility(18);
  voteEligibility(20);
  voteEligibility(17);
  voteEligibility(40);

  console.log("===========================Step 3=========================================");
  var checkcharcter=function(str){
 if (str.length>=10) {
    console.log(`String contain more than 10 cgaracter`);
 } else {
    console.log(`String not contain more than 10 cgaracter`);
 }
  }
  checkcharcter("javascript-Es6");

  console.log("=============================Step 4==============================================");
  var availableString =function(str){
   if (str.startsWith("java")) {
    console.log(`Given string ${str} start with "java"`);
   } else {
    console.log(`Given string ${str} is not start with "java"`);
   }
  }
  availableString ("javaScript Language");
  availableString ("Programming Language");