 const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]
//  console.log("====================Step 1================================");
//  arrayNumbers.forEach((currentValue,index)=>{
// console.log(`Element index :- ${currentValue} - ${index}`);
//  });

//   console.log("=========Step 2 Find the positive number and log on console========");
//   arrayNumbers.forEach((currentValue)=>{
//          if (currentValue>=0) {
//        console.log(currentValue);
        
//     }

//   });

 console.log("======Step 2==find the negative numbers ====");

  arrayNumbers.forEach((currentValue)=>{
   if (currentValue<0) {
        console.log(currentValue);
        
    }

  });

  console.log("=====Step 3===find the even numbers and log on console====");
 arrayNumbers.forEach((currentValue)=>{
    if (currentValue%2==0) {
        console.log(currentValue);
        
     }

  });

 console.log("======Step 4==find the sum of all element and log on console===");
  let sum=0;
 arrayNumbers.forEach((element)=>{
   sum=sum+element;
   
  });
  console.log(sum);

  console.log("=====Step 5===log the only even index array value========");
  arrayNumbers.forEach((currentValue,index)=>{
   if (index%2==0) {
    console.log(currentValue);
   }
 });
 