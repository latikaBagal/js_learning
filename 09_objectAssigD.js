 console.log("======================Step1:Create object===================================");
 const professor={
    Name: "Johnson",
    education:"engineering",
    department:"IT",
    Address:"pune",
    mobileNo:"9145423080",

    degree:{
        engineering:"CSC",
        PHD:"Adv Computing ",
        CCC:"Course on Computer Concept",
},
certificate:['Hacker Rank Participation','Certificate in IFE Course','Certificate in Adv Programming']

 };
 console.log(JSON.stringify(professor));
 console.log("============= Step 2:include nested object====================================");
console.log("============== Step3:Add new array: Certificate===============================");
console.log(JSON.stringify(professor));
 console.log("=====================Step 4: Add new property====================================");
 professor.totalExperience="14 years"
console.log(`total experience: ${professor.totalExperience}`);

console.log("=========================Step 5:Modify existing property=============================");
professor.education="MCA";
console.log("Modify property:Education:MCA");
//console.log(professor);

console.log(`=============Step 6:add one new certificate "Orical Certified" at the 2nd index of array=================`);
professor.certificate.splice(2,0,"Oracle Certified");
 console.log("['Hacker rank participation','certificate in IFE course','Oracle Certification'certificate in adv programming']");

 console.log("===========Ste 7:Log the last element of the array=======================");
const len= professor.certificate.length;
console.log('Last Certificate:',JSON.stringify(professor.certificate[len-1]));
//var result=professor.certificate.slice(professor.certificate.length-1);
//console.log(JSON.stringify( result));

console.log("=========================Step 8:Log complete object on console==============================");
console.log('Complete professor object:',JSON.stringify(professor));

console.log("================================Step 9:Traverse array using forOf loop ============================");
for (const certificate of professor.certificate) {
    console.log(JSON.stringify (certificate));
}