"use strict";

function randomText() {
    const text = "abcdefghijklmnopqrstuvwxyz0123456789";
    const letters = text[Math.floor(Math.random() * text.length)];
    return letters;
}

function rain() {
    const cloud = document.querySelector(".container .cloud");
    const divElement = document.createElement("div");
    const left = Math.floor(Math.random() * 310)
    const fontSize = Math.random() * 1.5;
    const duration = Math.random() * 1; 

    divElement.classList.add("text");
    cloud.appendChild(divElement);
    divElement.innerText = randomText();
    divElement.style.left = left + "px";
    divElement.style.fontSize = 0.5 + fontSize + "em";
    divElement.style.animationDuration = 1 + duration + "s";
    
    setTimeout(function() {
        cloud.removeChild(divElement);
    }, 2000);
}   

setInterval(function() {
    rain();
}, 20);