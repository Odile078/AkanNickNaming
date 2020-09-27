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
/* Validation for month input*/
function monthvalidate(){
   var months=document.gform.month.value;
   if( months==""||isNAN(months) ||  months.length<2 ){
       
        if( months < 1 || months > 12){
          document.getElementById("inputm").innerHTML="Please enter the date in numbers(1-31)";
          return false;
        }
    }
    else if(months.length>2){
      document.getElementById("inputm").innerHTML="Please enter a valid date";
          return false;
    }
    else{
      return true;
    }
  
   
}
/*Validation for year input*/
function yearvalidate(){
    var years=document.gform.year.value;
    if( years==""||isNAN(years) ||  years.length<2 ){
        
        if( year < 1900 || year > 2020){
           document.getElementById("inputd").innerHTML="Please enter the date in numbers(1-31)";
           return false;
       }
   }
   else if(year.length>4){
       document.getElementById("inputd").innerHTML="Please enter a valid date";
           return false;
   }
   else{
       return true;
   }
   
    
}
