document.addEventListener("DOMContentLoaded", e => {
const bride = document.getElementById("bride");

 bride.addEventListener("input", function(event){
  const bname = document.getElementById("bride").value;
  document.getElementById("bridename").innerHTML = bname;
});

const groom = document.getElementById("groom");

 groom.addEventListener("input", function(event){
  const gname = document.getElementById("groom").value;
  document.getElementById("groomname").innerHTML = gname;
});

const date = document.getElementById("date");

 date.addEventListener("input", function(event){
  const dname = document.getElementById("date").value;
  document.getElementById("datename").innerHTML = dname;
});

const location = document.getElementById("location");

 location.addEventListener("input", function(event){
  const lname = document.getElementById("location").value;
  document.getElementById("locationname").innerHTML = lname;
});

const words = document.getElementById("words");

 words.addEventListener("input", function(event){
  const wname = document.getElementById("words").value;
  document.getElementById("wordsname").innerHTML = wname;
});

const url = document.getElementById("url");

 url.addEventListener("input", function(event){
  const uname = document.getElementById("url").value;
  document.getElementById("urlname").innerHTML = uname;
});

const style1 = document.getElementById("style1")

style1.addEventListener("click", function(event){
  document.getElementById("firstbox").style.backgroundImage = 'url("https://images.unsplash.com/photo-1517331245290-8ab345b4265d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b195dbf0e1c9fda40340034db3ae7247&auto=format&fit=crop&w=634&q=80")';
  document.getElementById("firstbox").style.fontFamily = "'Alex Brush', cursive";
  document.getElementById("style1").style.fontFamily = "'Alex Brush', cursive";
  document.getElementById("styles").style.fontFamily = "'Alex Brush', cursive";
   document.getElementById("styles").style.color = "black";
  document.getElementById("styles").style.fontWeight = "bold";
  document.getElementById("secondcolor").style.color = "black";
  });
  
  const style2 = document.getElementById("style2")

style2.addEventListener("click", function(event){
  document.getElementById("firstbox").style.backgroundImage = 'url("https://images.unsplash.com/photo-1517061908942-6ccc4c1b56ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6df6bb1ce34e5272db76764c9052a660&auto=format&fit=crop&w=580&q=80")';
  document.getElementById("firstbox").style.fontFamily = "'Cutive Mono', monospace";
  document.getElementById("style2").style.fontFamily = "'Cutive Mono', monospace";
  document.getElementById("styles").style.fontFamily = "'Cutive Mono', monospace";
  document.getElementById("styles").style.color = "#00FFFF";
  document.getElementById("styles").style.fontWeight = "bold";
  document.getElementById("secondcolor").style.color = "#00FFFF";
  
});

const style3 = document.getElementById("style3")

style3.addEventListener("click", function(event){
  document.getElementById("firstbox").style.backgroundImage = 'url("https://images.unsplash.com/photo-1465147836063-7ca3784f01af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=98e46bc6cbabea687ed463e5b78a398a&auto=format&fit=crop&w=650&q=80")';
  document.getElementById("firstbox").style.fontFamily = "'Ranga', cursive";
  document.getElementById("style3").style.fontFamily = "'Ranga', cursive";
  document.getElementById("styles").style.fontFamily = "'Ranga', cursive";
  document.getElementById("styles").style.color = "#08dd08";
  document.getElementById("styles").style.fontWeight = "bold";
  document.getElementById("secondcolor").style.color = "paleGreen";
});

const header = document.getElementById("header");

 header.addEventListener("mouseleave", function(event){
  document.getElementById("header").innerHTML = "Congratulation on your engagement!  Now let's prepare for the BIG day!  Shall we :)  Let's start with the wedding invitations";
  document.getElementById("header").style.color = "#70380f";
  
});

const head = document.getElementById("header");

 head.addEventListener("mouseenter", function(event){
  document.getElementById("header").innerHTML = "Choose between this three beautiful designs";
  document.getElementById("header").style.color = "#70380f";
  
});

});

