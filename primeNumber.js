function isPrime(num){
    for (let index = 2; index < num; index++) {
        
       if (num%index==0) {
        return false;
       }
    
    } 
return true;

}
var result=isPrime(3);
console.log(`Given number 3 is prime: ${result}`);
console.log("--------------------------------------------------");
var result=isPrime(9);
console.log(`Given number 9 is prime: ${result}`);
console.log("-------------------------------------------------------");
var result=isPrime(7);
console.log(`Given number 7 is prime: ${result} `);
console.log("---------------------------------------------------");
var result=isPrime(6);
console.log(`Given number 6 is prime: ${result}`);
console.log("----------------------------------------------------------");
var result=isPrime(19);
console.log(`Given number 19 is prime: ${result}`);
console.log("-----------------------------------------------------------");
var result=isPrime(29);
console.log(`Given number 29 is prime: ${result}`);
console.log("--------------------------------------------------------");
var result=isPrime(53);
console.log(`Given number 53 is prime: ${result}`);
console.log("--------------------------------------------------------");




const array=[3,9,7,6,19,29,53]
let count=0;
for (const num of array) {
 if (isPrime(num)) {
   count=count+1; 
 }   
    
}
console.log(`Total prime number is : ${count}`);