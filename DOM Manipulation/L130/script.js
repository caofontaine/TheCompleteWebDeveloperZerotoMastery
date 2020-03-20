var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var initialGradient = window.getComputedStyle(body);
var buttonColor1 = document.querySelector(".buttonColor1");
var buttonColor2 = document.querySelector(".buttonColor2");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomizeColor() {
	return Math.floor(Math.random()*16777215).toString(16); //Generates random number based on max 6 digit hex value in decimal form before converting to hex.
}

function randomColor(e) {
    if(e.target.className === 'buttonColor1') {
        color1.value = "#" + randomizeColor();
    }
    else {
        color2.value = "#" + randomizeColor();
    }
    setGradient();
}

setGradient(); //Initialize background.

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

buttonColor1.addEventListener("click", randomColor);

buttonColor2.addEventListener("click", randomColor);

css.textContent = initialGradient.getPropertyValue("background-image") + ";"; //Set context to show gradient upon page load.