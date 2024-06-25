function gradeCalculation(marks){
 var typeOf=typeof marks
  
 //invalid marks
    if (marks<=0 || marks>100 || marks==undefined ||typeOf!="number") {
    console.log(`Invalid marks: ${marks}, Enter valid marks`);
}else{
    //Valid marks
    if (marks>=90) {
      console.log(`funtastic marks:${marks},your grade is A+`);  
    }
    if (marks>=75 && marks<90) {
     console.log(`Excellent marks: ${marks},your grade is A`);   
    }
    if (marks>=50 && marks<75) {
        console.log(`Good marks: ${marks},your grade is B`);     
    }
    if (marks>=35 && marks<50) {
        console.log(` marks is ${marks},your grade is C,need improvement`);  
    }
    if (marks>0 && marks<35) {
        console.log(` Failed marks:  ${marks}`);  
    }
  
    if ( marks>90) {
       // console.log(`funtastic marks:${marks},your grade is A+`);  
    }
  
}
}   

 gradeCalculation("Seven");
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);

gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
var str="91";
var num=parseInt(str);
console.log(`Funtastic marks:${num},your grade is A+`);
gradeCalculation("Eighty");
gradeCalculation(undefined);
gradeCalculation(null);


