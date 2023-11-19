// Modo estrito
"use strict";

// Função para gerar texto aleatório
function randomText() {
    const text = "abcdefghijklmnopqrstuvwxyz0123456789";
    const letters = text[Math.floor(Math.random() * text.length)];
    return letters;
}

// Função para fazer "chover"
function rain() {
    const cloud = document.querySelector(".container .cloud");
    const element = document.createElement("div");
    const left = Math.floor(Math.random() * 310);
    const size = Math.random() * 1.5;
    const duration = Math.random() * 1; 

    element.classList.add("text");
    cloud.appendChild(element);
    element.innerText = randomText();
    element.style.left = left + "px";
    element.style.fontSize = 0.5 + size + "em";
    element.style.animationDuration = 1 + duration + "s";
    
    setTimeout(function() {
        cloud.removeChild(element);
    }, 2000);
}   

// Ativar e controlar a quantidade de "chuva"
setInterval(function() {
    rain();
}, 20);