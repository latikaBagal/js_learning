console.log("=========================Step 1=================================");
let arrowFun=()=>{

console.log("Good Morning, Today is Saturday");
}
arrowFun();

console.log("========================Step 2==================================");
let multiplication=(num1,num2,num3=1)=>{
   let result= num1*num2*num3;
    console.log(`Multiplication is:-${result}`);
    }
    multiplication(5,5,2);
    multiplication(10,4)

    console.log("====================Step 3=======================================");
    let addition=(num1,num2,num3,num4,num5)=>{
        let result= num1+num2+num3+num4+num5;
         return result
         }
        let TotalAdd= addition(100,100,200,349,756);
        console.log(`Given number Addition is:${TotalAdd}`);
        let totalMul= addition("I am","learning", "ES6",   "features","in depth");
        console.log(`Given String Addition is:${totalMul}`);