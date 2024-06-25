const student={
    stdName:"Jenny",
    rollNum:"107",
    city:"Pune",
  isMarried:false,
  friendsList:["Elon","Bill","Stew"],
  address:{
    flatNum:1005,
    society:"Horizon",
    street:"Wakad",
    PIN:411057
  }
};
console.table(student);

console.log("Accessing element from object ");
console.log(`Student name is:${student.stdName}`);
console.log(` Married status: ${student.isMarried}`);

console.log("========================Add new entries==================");
student.mobileNo="9966778855";
console.log(student);
student.address.city="pune";
console.log(student);

console.log("========================Update the values==================");
console.log(student.isMarried=true);
 console.log(student.friendsList[1]="Bill gates");   

 console.log("Delete value");
 delete student.city;

 console.log("===============How to add method in object===========================");
 const person={
    firstName:"Latika",
    lastName: "Bagal",
    city:"Mumbai",
    display:function(){
        console.log(`Full Name: ${this.firstName},${this.lastName}`);
    }
 }
 person.display();