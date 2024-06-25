
var num=11;
console.log(`Before if block`);
if(num%2==0){
console.log(`Even no`);

}
console.log(`After if block`);

console.log("===================Function================================");
function isEven(num){
    
console.log(`Before if block`);
if(num%2==0){
console.log(`Even no`);
}
console.log(`After if block`);
}
isEven(10);
isEven(9);
isEven(1017);

console.log("==================if else block====================================");
var isEvenOrOdd=function(num){
if (num%2==0) {
    console.log(`Even`);
} else {
    console.log(`odd`);
}
}
isEvenOrOdd(3);
isEvenOrOdd(90);