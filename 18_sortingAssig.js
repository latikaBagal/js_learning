console.log("------------------------------Given array Is:-----------------------------------------------");
const arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45]
console.log(arrayRollNumbers);
console.log("-----------------------Reverse array----------------------------------------------");
arrayRollNumbers.reverse();
console.log(arrayRollNumbers);


console.log("------------Use the sort() method as it is without any custom sorting logic -----------");
arrayRollNumbers.sort();
console.log(arrayRollNumbers);


console.log("------------Sort the array in ascending order by writing your custom logic ---------");
arrayRollNumbers.sort((n1, n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log(arrayRollNumbers);

console.log("------------Find the gratest number from the array-----------------");
const lastEle=arrayRollNumbers.length;
console.log(arrayRollNumbers[lastEle-1]);

console.log("------------Find the smallest number from the array-----------------");
let firstEle=arrayRollNumbers[0];
console.log(firstEle);


console.log("--------------Remove duplicate from array-------------------------");
const mySet= [...new Set(arrayRollNumbers)];
console.log(mySet);