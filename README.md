# api
probe folder

btn.addEventListener("click", function() {
var latitud = "51.460351";
var longitud = "-0.190630";
var url = "https://api.hub-box.com/v1/public/collectpoints/nearest?lat=" + latitud + "&lng=" + longitud;
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', url); // http method, url
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData['_embedded'].collectpoints);
    for (i = 0; i < ourData['_embedded'].collectpoints.length; i++) {
        locationsLat.push(ourData['_embedded'].collectpoints[i].address['latitude']);
    }
    initMap();
};
ourRequest.send();
});
