function isAnagram(str1,str2){
   
var result=str1.split("").sort().join("");
var string=str2.split("").sort().join("");
//console.log(string,result);
if (result===string) {
 console.log(`Given String is anagram:  ${str1} ,${str2}`);   
} else{
    console.log(`Given string is not anagram: ${str1}, ${str2}`);
}

}
isAnagram("vile","evil");
console.log("--------------------------------------------");
isAnagram("silent","listen");
console.log("--------------------------------------------");
isAnagram("triangle","integral");
console.log("--------------------------------------------");
isAnagram("gram","arm");
