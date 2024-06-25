console.log("Find out all the numbers which are grater than 50 and log on console ");
const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19];
 const array =arrayNumbers.filter( (element)=>{
  return element>50;
    
});
console.log(array);

console.log("Find out all the even number and log on console");

 const even=arrayNumbers.filter( (element)=>{
    return element%2==0
    
});
console.log(even);

console.log("Find out all the odd number and log on console");

 const odd= arrayNumbers.filter( (element)=>{
    return element%2==1
    
});
console.log(odd);

console.log("Find out all the numbers which are multiple of 5");

 const multiple=arrayNumbers.filter( (element)=>{
    return element%5==0
    
});
console.log(multiple);

console.log("Find out all numbers which are between 20 and 50");

 const arrayBetween=arrayNumbers.filter( (element)=>{
    return element>=20 && element<=50
    
});
console.log(arrayBetween);
