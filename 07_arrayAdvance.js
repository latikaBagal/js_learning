var array=[10,20,30,40,15];
console.log("===============Slice()===============");
const sliceFrom2=array.slice(2)
console.log(sliceFrom2);

const sliceFrom1To3=array.slice(1,3);
console.log(sliceFrom1To3);

var array=[10,20,30,40,15];
console.log("===============Splice()===============");
var deletedElement=array.splice(2);
console.log(array);
console.log(deletedElement);

console.log("Removing middle element from the array");
var array=[10,20,30,40,15];
const deleteElements=array.splice(2,2);
console.log(array);
console.log(deleteElements);

console.log("only insert an element without removing any exsting element");
var array=[10,20,30,40,15];
console.log(array);
array.splice(2,0,500);
console.log(array);

console.log("Inserting multiple elements without removing existing element");
var array=[10,20,30,40,15];
console.log(array);
array.splice(1,0,400,900,200);
console.log(array);


console.log(" insert an element by deleting or removing few elements ");
var array=[10,20,30,40,15];
console.log(array);
array.splice(2,1,700,800);
console.log(array);

console.log(" Remove multiple elements ");
var array=[10,20,30,40,15];
console.log(array);
array.splice(1,3,500);
console.log(array);