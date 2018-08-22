//funtion to check if the input type radio for the time has been selected. 

function validationArtDeco(){
 if(document.getElementById("firstName").value==="" || document.getElementById("firstName").value.match(/\s/g)){
   document.getElementById("firstName").value=document.getElementById("firstName").value.replace(/\s/g,'');
   document.getElementById("error1").innerHTML = "First name must be filled out"+"<br/>" +"and without space";
   return false;
}else if(document.getElementById("secondName").value===""){
   document.getElementById("error1").innerHTML = "";
   document.getElementById("error2").innerHTML = "Second name must be filled out";
   return false;
 }else if(document.getElementById("lastName").value===""){
   document.getElementById("error1").innerHTML = "";
   document.getElementById("error2").innerHTML = "";
   document.getElementById("error3").innerHTML = "Last name must be filled out";
   return false;
 }else if(document.getElementById("date").value===""){
   document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
   document.getElementById("error3").innerHTML = "";
   document.getElementById("error4").innerHTML = "Date must be filled out";
   return false;
 }else if(document.getElementById("time").value===""){
   document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
   document.getElementById("error4").innerHTML = "";
   document.getElementById("error5").innerHTML = "Time must be filled out";
   return false;
 }
 else if(document.getElementById("address").value===""){
   document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
   document.getElementById("error5").innerHTML = "";
   document.getElementById("error6").innerHTML = "Address must be filled out";
   return false;
 }else{document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
   document.getElementById("error5").innerHTML = "";
   document.getElementById("error6").innerHTML = "";
   document.getElementById("design").style.fontSize= "17px";  
    document.getElementById("design").style.background = "url('https://images.unsplash.com/photo-1470322346096-ecab3914cab7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c06a8ab9abddc96165482e491bec4dd6&auto=format&fit=crop&w=334&q=80') no-repeat center";
    document.getElementById("design").style.backgroundSize = "contain";
     document.getElementById("design").style.fontFamily = 'Satisfy','cursive';
     document.getElementById("design").style.color = "white";
     document.getElementById("design").style.textShadow = "2px 2px 1px black";
     
   
    
    document.getElementById("result").innerHTML = "<center>"+"<br/>"+"Your are invited to the wedding of: "+"<br/>"+"<p>"+"<font color='white' size='6' face='Boogaloo'>"+
    document.getElementById("firstName").value + " & " +
    document.getElementById("secondName").value + "</p>"+"</font>" +"<p>"+
    document.getElementById("lastName").value + "</p>" + "<p>"+ "On "+
    document.getElementById("date").value + "</p>" + "<p>"+
    document.getElementById("time").value + "</p>" + "<p>"+
    document.getElementById("address").value + "</p>" + "<p>"+ "<font color='white' size='2' face='sans-serif'>" +"RSVP: "+ document.getElementById("firstName").value.charAt(0).toLowerCase() + document.getElementById("secondName").value.charAt(0).toLowerCase() +"wedding.com"+"</font>" +"</p>"+
    "</center>";
    //object.style.backgroundSize = "auto"
    
 }
}
function validationFormal(){
 if(document.getElementById("firstName").value===""){
   document.getElementById("error1").innerHTML = "First name must be filled out";
   return false;
 }else if(document.getElementById("secondName").value===""){
   document.getElementById("error1").innerHTML = "";
   document.getElementById("error2").innerHTML = "Second name must be filled out";
   return false;
 }else if(document.getElementById("lastName").value===""){
   document.getElementById("error1").innerHTML = "";
   document.getElementById("error2").innerHTML = "";
   document.getElementById("error3").innerHTML = "Last name must be filled out";
   return false;
 }else if(document.getElementById("date").value===""){
   document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
   document.getElementById("error3").innerHTML = "";
   document.getElementById("error4").innerHTML = "Date must be filled out";
   return false;
 }else if(document.getElementById("time").value===""){
   document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
   document.getElementById("error4").innerHTML = "";
   document.getElementById("error5").innerHTML = "Time must be filled out";
   return false;
 }
 else if(document.getElementById("address").value===""){
   document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
   document.getElementById("error5").innerHTML = "";
   document.getElementById("error6").innerHTML = "Address must be filled out";
   return false;
 }else{document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
   document.getElementById("error5").innerHTML = "";
   document.getElementById("error6").innerHTML = "";
   document.getElementById("design").style.fontSize= "18px";  
    document.getElementById("design").style.background = "url('https://images.unsplash.com/photo-1529425689619-bf11828c26fb?ixlib=rb-0.3.5&s=8395c8b1b5d4027bb84d4b1f9142f904&auto=format&fit=crop&w=371&q=80') no-repeat center";
   document.getElementById("design").style.backgroundSize = "contain";
     document.getElementById("design").style.fontFamily = 'Satisfy','cursive';
     document.getElementById("design").style.color = "white";
     document.getElementById("design").style.textShadow = "2px 2px 1px black";
     
   
    
    document.getElementById("result").innerHTML = "<center>"+"<br/>"+"Your are invited to the wedding of: "+"<br/>"+"<p>"+"<font color='white' size='6' face='Boogaloo'>"+
    document.getElementById("firstName").value + " & " +
    document.getElementById("secondName").value + "</p>"+"</font>" +"<p>"+
    document.getElementById("lastName").value + "</p>" + "<p>"+ "On "+
    document.getElementById("date").value + "</p>" + "<p>"+
    document.getElementById("time").value + "</p>" + "<p>"+
    document.getElementById("address").value + "</p>" + "<p>"+ "<font color='white' size='2' face='sans-serif'>" +"RSVP: "+ document.getElementById("firstName").value.charAt(0).toLowerCase() + document.getElementById("secondName").value.charAt(0).toLowerCase() +"wedding.com"+"</font>" +"</p>"+
    "</center>";
      //object.style.backgroundSize = "auto"
    
 }
}
function validationSpring(){
 if(document.getElementById("firstName").value===""){
   document.getElementById("error1").innerHTML = "First name must be filled out";
   return false;
 }else if(document.getElementById("secondName").value===""){
   document.getElementById("error1").innerHTML = "";
   document.getElementById("error2").innerHTML = "Second name must be filled out";
   return false;
 }else if(document.getElementById("lastName").value===""){
   document.getElementById("error1").innerHTML = "";
   document.getElementById("error2").innerHTML = "";
   document.getElementById("error3").innerHTML = "Last name must be filled out";
   return false;
 }else if(document.getElementById("date").value===""){
   document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
   document.getElementById("error3").innerHTML = "";
   document.getElementById("error4").innerHTML = "Date must be filled out";
   return false;
 }else if(document.getElementById("time").value===""){
   document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
   document.getElementById("error4").innerHTML = "";
   document.getElementById("error5").innerHTML = "Time must be filled out";
   return false;
 }
 else if(document.getElementById("address").value===""){
   document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
   document.getElementById("error5").innerHTML = "";
   document.getElementById("error6").innerHTML = "Address must be filled out";
   return false;
 }else{document.getElementById("error1").innerHTML = "";
    document.getElementById("error2").innerHTML = "";
    document.getElementById("error3").innerHTML = "";
    document.getElementById("error4").innerHTML = "";
   document.getElementById("error5").innerHTML = "";
   document.getElementById("error6").innerHTML = "";
   document.getElementById("design").style.fontSize= "18px";  
    document.getElementById("design").style.background = "url('https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7b3ae2747fa71565d157b1455982a37&auto=format&fit=crop&w=1534&q=80') no-repeat center";
   
   document.getElementById("design").style.backgroundSize = "contain";
     document.getElementById("design").style.fontFamily = 'Satisfy','cursive';
     document.getElementById("design").style.color = "white";
     document.getElementById("design").style.textShadow = "2px 2px 1px black";
     
   
    
    document.getElementById("result").innerHTML = "<center>"+"<br/>"+"Your are invited to the wedding of: "+"<br/>"+"<p>"+"<font color='white' size='6' face='Boogaloo'>"+
    document.getElementById("firstName").value + " & " +
    document.getElementById("secondName").value + "</p>"+"</font>" +"<p>"+
    document.getElementById("lastName").value + "</p>" + "<p>"+ "On "+
    document.getElementById("date").value + "</p>" + "<p>"+
    document.getElementById("time").value + "</p>" + "<p>"+
    document.getElementById("address").value + "</p>" + "<p>"+ "<font color='white' size='2' face='sans-serif'>" +"RSVP: "+ document.getElementById("firstName").value.charAt(0).toLowerCase() + document.getElementById("secondName").value.charAt(0).toLowerCase() +"wedding.com"+"</font>" +"</p>"+
    "</center>";
    //object.style.backgroundSize = "auto"
    
 }
}
//funtion to get the information and print it in <p></p>

//event button to print info
document.addEventListener("DOMContentLoaded", button => {
  document.getElementById("artDeco")
   .addEventListener("click", button => validationArtDeco()
      
   );
   
})
document.addEventListener("DOMContentLoaded", button => {
  document.getElementById("formal")
   .addEventListener("click", button => validationFormal()
      
   );
   
})
document.addEventListener("DOMContentLoaded", button => {
  document.getElementById("spring")
   .addEventListener("click", button => validationSpring()
      
   );
   
})
/*
document.addEventListener("DOMContentLoaded", button => {
  document.getElementById("firstName")
  .addEventListener("keypress", function(event){ 
     validationSpring()
   document.getElementById("result").innerHTML += event.key;
   var keycode;

        keycode = event.keyCode ? event.keyCode : event.which;

        if (!(event.shiftKey == false && (keycode == 46 || keycode == 8 ||
                keycode == 37 ||keycode == 39 || (keycode >= 48 && keycode <= 57)))) {
            event.preventDefault();
        }
   }
   );
   
})

document.getElementById("firstName").addEventListener("keypress", myFunction);

function myFunction() {
    document.getElementById("result").innerHTML = document.getElementById("firstName").value;
}*/