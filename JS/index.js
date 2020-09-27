/*Validating the date input  */
function datevalidate(){
var date=document.gform.day.value;
if( date==""||isNAN(date) ||  date.length<2 ){
        
    if( date < 1 || date > 31){
       document.getElementById("inputd").innerHTML="Please enter the date in numbers(1-31)";
       return false;
   }
}
else if(date.length>2){
   document.getElementById("inputd").innerHTML="Please enter a valid date";
       return false;
}
else{
   return true;
}


}