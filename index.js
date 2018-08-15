
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
       $( function() {
        $( "#datepicker" ).datepicker();
      } );
      console.log(document.getElementById("button1"))
     document.getElementById("button1").addEventListener("click", e => appearApp("app1"));
       
    function appearApp(thingToAppear) {
        var element = document.getElementById(thingToAppear);
        console.log(element)
        element.style.display = "block";
    }

  });
  
  function myMap() {
      var mapOptions = {
          center: new google.maps.LatLng(51.5, -0.12),
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.HYBRID
      }
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  }
  
  document.getElementById("#showMap").addEventListener("click",function () {
    var x = document.getElementById("showMap");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})




