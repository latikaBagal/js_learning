console.log(` Write a function which should count the total number spaces 
               that is available in the string`);
console.log("---------------------------------------------------------------------");
function calSpaces(str) {
  var spaces = 0;

  for(var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
       spaces ++;
       
    }
   

}
return spaces; 
}

var result=calSpaces("Revision is the mother of success");
console.log(`Given String -"Revision is the mother of success" `);
console.log(`Total spaces:- ${result}`);
console.log("----------------------------------------------------");
var result=calSpaces("Javascript is the language of internet world");
console.log(`Given String -"Javascript is the language of internet world" `);
console.log(`Total spaces:- ${result}`);