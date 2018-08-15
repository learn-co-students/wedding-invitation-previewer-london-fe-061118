document.addEventListener("DOMContentLoaded", e => {  

let theme1 = document.getElementById("theme1");
let theme2 = document.getElementById("theme2");
let theme3 = document.getElementById("theme3");
let invitation =  document.getElementById("invitation");


let firstName = document.getElementById('firstName');
let secondName = document.getElementById('secondName');
let weddingDate = document.getElementById('weddingDate');
let weddingVenue = document.getElementById('weddingVenue');


theme2.addEventListener("click", e => {
    invitation.style.background = "url('https://images.unsplash.com/photo-1517330283827-2527c57981ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5dea691feeb4675e9a69f7c7ae3e73c1&auto=format&fit=crop&w=800&q=60')";
});

theme1.addEventListener("click", e => {
    invitation.style.background = "url('https://images.unsplash.com/photo-1528459584353-5297db1a9c01?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05184fe5fe43dabf61312c36d5b1e050&auto=format&fit=crop&w=800&q=60')"; 

});

theme3.addEventListener("click", e => {
	invitation.style.background = "url('https://images.unsplash.com/reserve/xd45Y326SvKzSR3Nanc8_MRJ_8125-1.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0d11aed3cc9c4978ec3bc5dbd599baa2&auto=format&fit=crop&w=800&q=60')";

});


theme1.addEventListener("click", e => {
	invitation.style.color = "#4c1f36";


});
theme2.addEventListener("click", e => {
	invitation.style.color = "white";
});

theme3.addEventListener("click", e => {
	invitation.style.fontFamily = "'Domine', serif";
});
	
theme2.addEventListener("click", e => {
	invitation.style.fontFamily = "'Satisfy', cursive";

});
theme1.addEventListener("click", e => {
	invitation.style.fontFamily = "'Satisfy', cursive";
});


firstName.addEventListener("keypress", function(event){
 document.getElementById("name1").innerHTML += event.key;

});

secondName.addEventListener("keypress", function(event){
 document.getElementById("name2").innerHTML += event.key;
});

weddingDate.addEventListener("keypress", function(event){
 document.getElementById("date").innerHTML += event.key;

});
weddingVenue.addEventListener("keypress", function(event){
 document.getElementById("venue").innerHTML += event.key;


});
});