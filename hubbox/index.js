var map;
var lat;
var lng;
var locationsLat = [];
var locationsLng = [];
var locationsName = [];
//var btn = document.getElementById("btn");

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 51.460351,
            lng: -0.190630
        },
        zoom: 13
    });
    for (i = 0; i < locationsLat.length; i++) {
        var marker = new google.maps.Marker({
            position: { lat: locationsLat[i], lng: locationsLng[i] },
            map: map,
            title: locationsName[i]
        });
    }
}

//btn.addEventListener("click", function() {
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
        locationsLng.push(ourData['_embedded'].collectpoints[i].address['longitude']);
        locationsName.push(ourData['_embedded'].collectpoints[i].name);
    }
    initMap();
};
ourRequest.send();
//});