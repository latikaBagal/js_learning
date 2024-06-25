var array=[10,20,30,40,15];
console.log(array);
console.log(...array);

console.log('Merge the two array using spread operator');
var arrayOne=[1,3,4];
var arrayTwo=[7,9,5];
var mergeArray=[...arrayOne, ...arrayTwo];
console.log(mergeArray);