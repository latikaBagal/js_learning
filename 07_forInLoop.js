console.log("=================forIn loop traverse the array================================");
var array=[10,20,30,40,15]
for (const index in array) {
    
   console.log(array[index]);     
        
    }


    console.log("=================forOf loop traverse the array================================");
    for (const element of array) {
        console.log(element);
    }

    console.log("=========================Join method()==========================");
    var array=[10,20,30,40,15];
    const result=array.join("-")
    console.log(result);