document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formFirstName"))
        document.getElementById("formFirstName").addEventListener('keypress', function(e) {
        document.getElementById("firstName").innerHTML += e.key;   
          
        })})
        
document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formSecondName"))
        document.getElementById("formSecondName").addEventListener('keypress', function(e) {
        document.getElementById("secondName").innerHTML += e.key;   
          
        })})      

document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formDate"))
        document.getElementById("formDate").addEventListener('keypress', function(e) {
        document.getElementById("date").innerHTML += e.key;   
          
        })})            

document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formTime"))
        document.getElementById("formTime").addEventListener('keypress', function(e) {
        document.getElementById("time").innerHTML += e.key;   
          
        })})     

document.addEventListener("DOMContentLoaded", 
    function() {
      console.log(document.getElementById("formLocation"))
        document.getElementById("formLocation").addEventListener('keypress', function(e) {
        document.getElementById("location").innerHTML += e.key;   
          
        })})