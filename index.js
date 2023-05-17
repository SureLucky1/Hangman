var html = "";
var { wordlist } = require("./wordlist.js");
var c;
for (var i = 65; 90 >= i; i++) {
  // A-65, Z-90
  c = String.fromCharCode(i);
  html += "<button onclick=\"setLetter('" + c + "');\">" + c + "</button>";
}
document.getElementById("box").innerHTML = html;

var setLetter = function (x) {
  document.getElementById("name").innerHTML += x;
};

// Another way to addEventListener
document.getElementById("clickme").addEventListener("click", function () {
  document.getElementById("demo").innerHTML = "Hello World";
});
document.getElementById("hoverme").addEventListener("mouseover", function () {
  document.getElementById("demo").innerHTML = "Hello Coding World";
});
document.getElementById("hoverme").addEventListener("mouseout", function () {
  document.getElementById("demo").innerHTML = "GoodBye Coding World";
});

/*
the addEventlistner will be like
    document.addEventListener("click", myfunction);
the click is one of the event, which is in this link
    https://www.w3schools.com/jsref/dom_obj_event.asp
*/
