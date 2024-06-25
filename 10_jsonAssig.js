const string=`{
"name": "Aleix Melon",
"id" :  "E00245",
"role" : ["Dev","DBA"],
"age"  : "23",
"doj"  :  "11-12-2019",
"married" : false,
"address" :{
   "street" :"32,Laham St.",
    "city"  : "Innsbruck",
    "Country" : "Austria"
    },
    "referred-by":"E0012"
}`


console.log(string);
const employee = JSON.parse(string);
//console.table(employee);
console.log("------------------------Step 2--------------------------------------");

console.log("Convert Json into object");

console.log("----------------------------Step 3-------------------------------------");
console.log(`Role :- ${employee.role[0]}`);

console.log("-----------------------------Step 4------------------------------------");
console.log(`Last name is: ${employee.name.split(" ")[1]}`);


console.log("--------------------------------Step 5--------------------------------------");

//var array=employee.doj.split ("-");
//console.log(array[2]);
console.log(` Employee joining year is:${employee.doj.split("-")[2]}`);

