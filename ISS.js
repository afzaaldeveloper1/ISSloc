$(document).ready(function() {
  $(".btn-default").on("click", function(e){
    e.preventDefault();
    var userAddress = $("#userAddress").val();
    var googleApiUrl = "https://maps.googleapis.com/maps/api/geocode/json?";
    googleApiUrl += "key=AIzaSyB2GSm2xmpapNi7O6xAE2mMpb1PSWNiNFA";
    googleApiUrl += "&address=" + userAddress;

    $.ajax({
      type: "GET",
      url: googleApiUrl,
      success: issApiSuccessHandler
    });

  });
  function issApiSuccessHandler(response) {

    var geoLocation = response.results[0].geometry.location;
    var issApiUrl = "http://api.open-notify.org/iss-pass.json?";
      issApiUrl += "lat=" + geoLocation.lat;
      issApiUrl += "&lon=" + geoLocation.lng;
      $.ajax({
        type: "GET",
        url: issApiUrl,
        success: function(response){
          console.log(response)
        }
      });
  }
  
});
