
const arryNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(arryNumbers);
console.log("========Step 1 ====Add 10 into each element and log new array on console ======");
const newArray = arryNumbers.map( (element)=>{
    return element + 10;
});
console.log(newArray);


console.log("=======Step 2====cube the each array element and log on console===========");

const newArrayCube = arryNumbers.map( (element)=>{
    return element*element*element;
});
console.log(newArrayCube);

console.log("=======Step 3====Add the index value into its corresponding each array element and log new array result on console");

const newArr = arryNumbers.map( (element,index)=>{
    return element+index;
});
console.log(newArr);