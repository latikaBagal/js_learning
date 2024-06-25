var word = "JavaScript"; //tpircsavaJ reverse order
 var result="";
for (let index = word.length-1; index >= 0; index--) {
    var ch=word.charAt(index) ;
  result= result+ch; // result=result+ch;
   //console.log(ch); 
}
console.log(result);