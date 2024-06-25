function isPalindrom(str){
    let reverseStr=str.split("").reverse().join("");
if (reverseStr==str) {
    console.log(`Given string: ${str} is palindrom`);
} else{
    console.log(` Given string: ${str} is not palindrom`);
}

}
isPalindrom("madam");
console.log("------------------------------------------------");
isPalindrom("141");
console.log("------------------------------------------------");
isPalindrom("sunday");
console.log("----------------------------------------------");
isPalindrom("mom");
console.log("---------------------------------------------------");
isPalindrom("listen");
console.log("---------------------------------------------------");
isPalindrom("dad");
