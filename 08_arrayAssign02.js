 var arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
// console.log(arrayNumbers);
// console.log(`Total elements available in array- ${arrayNumbers.length}`);
// console.log("=========================================================");
// console.log(`First element in the array is- ${arrayNumbers[0]}`);
// console.log("=========================================================");
// console.log(`Last element in the array is- ${arrayNumbers[10]}`);
// console.log("=========================================================");

// console.log(`Log the third last element using length property `);
// var result=arrayNumbers.slice(arrayNumbers.length-3)
// console.log(result);

// console.log("==============Find the all even numbers using forOf loop=======================");
// for (const element of arrayNumbers) {
//    if (element%2==0) {
//     console.log(element);
//    } 
// }

// console.log("==============Find the odd numbers using forOf loop=======================");

// for (const element of arrayNumbers) {
//    if (element%2!=0) {
//     console.log(element);
//    } 
// }

 console.log("==============Some of all even numbers in array=======================");
  var sum=0;
 for (const element of arrayNumbers) {
    if (element%2==0) {
    sum=sum+element
    console.log(sum);
   } 
   }
  console.log(sum);

  console.log("==============Some of all odd numbers in array=======================");
  var sum=0;
 for (const element of arrayNumbers) {
    if (element%2!=0) {
     sum=sum+element
   // console.log(sum);
   } 
    }
 console.log(sum);

 console.log("==============Some of all elements in array=======================");
 var sum=0;
 for (const element of arrayNumbers) {
   
    sum=sum+element
    
   }
  console.log(sum);

 console.log("==============Find the numbers multipe of 5=======================");
  for (const element of arrayNumbers) {
     if (element%5==0) {
      console.log(element);
   }
  }
 
   console.log("==============Is number 115 available in array=======================");
  var result= arrayNumbers.includes(115);
  console.log(result);

 console.log("==============Is number 23 available in array=======================");
  var result= arrayNumbers.includes(23);
 console.log(result);

  console.log("=============Insert numbers 55,66 At index 3 ==================");
  var insert=arrayNumbers.splice(3,0,55,66);
  console.log(arrayNumbers);

 
  console.log("=============Delete 3 elements starting from index 4==================");
  var DeleteElement=arrayNumbers.splice(4,3);
 console.log(DeleteElement);

   
   