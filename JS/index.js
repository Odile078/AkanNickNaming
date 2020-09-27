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
/*Validation of the whole form just in case a user submit without filling the form*/

function formvalidate(){
    var date=document.gform.day.value;
    var months=document.gform.month.value;
    var years=document.gform.year.value;
    var ind= document.gform.fname.value
    var gend= document.getElementsByName("gender");

    if( date==""||months==""||years==""||ind=="" ||gend==""){
        alert( "Please fill out all the fields in the form!" );
        document.myForm.day.focus() ;
        return false;
    }
        
    else{
        return true ;
      }

}
/*Array of the Akan names and days, and variables of information taken from the form */
var namesOfDays = ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var namesOfMale = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var namesOfFemales = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

var date=document.gform.day.value;
var months=document.gform.month.value;
var years=document.gform.year.value;
var ind= document.gform.fname.value;
var gend= document.getElementsByName("gender");

/* calcutate the day of birth with a function*/

var CC, YY, MM, DD, d, valueOfDay;
function calcday(){
    var years=document.gform.year.value;
    CC = parseInt(years.substring(0,2));
    YY = parseInt(years.substring(2,4));
    MM = parseInt(months);
    DD = parseInt(date);
    d = ( ( (CC/4) -2*CC-1) + ( (5*YY/4) ) + ((26*(MM+1)/10) ) + DD)%7;
    console.log(d);
    return (Math.floor(d));
  
  }

//