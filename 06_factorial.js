
function factorialOfNum(num){
 if (num==null || num==undefined ) {
    console.log(`Invalid Input:${num}`);
 
} else{ 
let fact=1;
for (let i= num; i >=1; i--) {
  fact=fact*i; 

}
console.log(fact);
console.log(`Factorial of  is ${num},${fact} ` );
 }

} 




factorialOfNum(5);
 console.log('Factorial of 3 is');
 factorialOfNum(3);
 factorialOfNum(null);
 console.log('Factorial of 8 is');
 factorialOfNum(8);
 factorialOfNum(undefined);
 console.log('Factorial of 9 is');
factorialOfNum(9);
console.log('Factorial of 0 is');
factorialOfNum(0);

