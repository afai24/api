// recorriendo un array
var coches = ["felipe", "estemen", "arias"];
for (var i = 0; i < coches.length; i++) {
    console.log(coches[i]);
    document.getElementById("array").innerHTML = coches[i] + '<br>';
}

var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

btn.addEventListener("click", function() {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json'); // http method, url
    ourRequest.onload = function() {
        //console.log(ourRequest.responseText);
        var ourData = JSON.parse(ourRequest.responseText);
        //var ourData = ourRequest.responseText;
        console.log(ourData);
        renderHTML(ourData);
    };
    ourRequest.send();

});


function renderHTML(data) {
    console.log(data);
    var htmlString = " ";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + "is a: " + data[i].species + "</p>";
    }
    animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
/*var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json'); // http method, url
ourRequest.onload = function() {
    console.log(ourRequest.responseText);
    var ourData = JSON.parse(ourRequest.responseText);
    //var ourData = ourRequest.responseText;
    console.log(ourData);
};
ourRequest.send();*/