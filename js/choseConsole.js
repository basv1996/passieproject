"use strict";

var terugKnop = document.querySelector("#terugknop");
var previousConsoleKnop = document.querySelector("#previousConsole");
var nextConsoleKnop = document.querySelector("#nextConsole");
var consoleTekstElement = document.querySelector("#yourConsole");
var consoleImgElement = document.querySelector("#consoleImage");
var volgendSchermKnop = document.querySelector(".goToNextPage");
var dobElement = document.querySelector("#DOB");

var consolesImgs = ["Playsstation_controller.png", "Xbox_controller.png", "Nintendo_controller.png", "Computer_controller.png", ];

var nameConsole = ["Playstation", "XBOX", "Nintendo", "Desktop"];

var nummertje = 0;
//is de terug knop links bovin het scherm
function paginaTerug() {
    window.history.back()
}
terugKnop.addEventListener("click", paginaTerug);

function nextConsole() {
    nummertje++;
    consoleImgElement.src = "../img/icons/" + consolesImgs[nummertje]
    consoleTekstElement.textContent = nameConsole[nummertje];
    if (nummertje > nameConsole.length -1) {
        nummertje = 0;
        consoleImgElement.src = "../img/icons/" + consolesImgs[nummertje]
        consoleTekstElement.textContent = nameConsole[nummertje];
    }
   
}

function previousConsole() {
    nummertje--;
    consoleImgElement.src = "../img/icons/" + consolesImgs[nummertje]
    consoleTekstElement.textContent = nameConsole[nummertje];
     if (nummertje < 0) {
        nummertje = nameConsole.length -1;
        consoleImgElement.src = "../img/icons/" + consolesImgs[nummertje]
        consoleTekstElement.textContent = nameConsole[nummertje];
    }
}

terugKnop.addEventListener("click", paginaTerug);
nextConsoleKnop.addEventListener("click", nextConsole);
previousConsoleKnop.addEventListener("click", previousConsole);