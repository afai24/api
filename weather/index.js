console.log('loa mundo');
/*var http = new XMLHttpRequest();
url = 'https://www.metaweather.com/api/location/search/?query=london';
http.open('get', url);
http.send();
console.log(http.responseText);
return http.responseText;
*/
var theUrl = 'https://www.metaweather.com/api/location/search/?query=london';

function httpGet(theUrl) {
    var location = document.getElementById("texto");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}