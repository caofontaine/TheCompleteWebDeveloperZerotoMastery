var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonColor1 = document.querySelector(".buttonColor1");
var buttonColor2 = document.querySelector(".buttonColor2");

console.log(document.styleSheets[0]);

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function randomColor(e) {
    if(e.target.className === 'buttonColor1') {
        color1.setAttribute("value", "#" + Math.floor(Math.random()*16777215).toString(16));
    }
    else {
        color2.setAttribute("value", "#" + Math.floor(Math.random()*16777215).toString(16));
    }
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

buttonColor1.addEventListener("click", randomColor);

buttonColor2.addEventListener("click", randomColor);

setGradient();

