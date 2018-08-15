document.getElementById("you").addEventListener("input", function(event){ 
  let firstName = document.getElementById("you").value;
  document.getElementById("first-name").innerHTML = firstName;
    
    if (firstName == 0) {
      document.getElementById("first-name").innerHTML = "You";
    } 
    
});

document.getElementById("them").addEventListener("input", function(event){ 
  let secondName = document.getElementById("them").value;
  document.getElementById("second-name").innerHTML = secondName;
  
  if (secondName == 0) {
      document.getElementById("second-name").innerHTML = "Them";
  }
});

document.getElementById("date").addEventListener("input", function(event){ 
  let dated = document.getElementById("date").value;
  document.getElementById("dated").innerHTML = dated;
  
  if (dated == 0) {
      document.getElementById("dated").innerHTML = "the happiest day of our lives";
  }
  
});

document.getElementById("location").addEventListener("input", function(event){ 
  let locate = document.getElementById("location").value;
  document.getElementById("locate").innerHTML = locate;
  
  if (locate == 0) {
      document.getElementById("locate").innerHTML = "our home";
  }
});








