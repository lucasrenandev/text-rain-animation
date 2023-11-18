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
    const div = document.createElement("div");
    const left = Math.floor(Math.random() * 310);
    const size = Math.random() * 1.5;
    const duration = Math.random() * 1; 

    div.classList.add("text");
    cloud.appendChild(div);
    div.innerText = randomText();
    div.style.left = left + "px";
    div.style.fontSize = 0.5 + size + "em";
    div.style.animationDuration = 1 + duration + "s";
    
    setTimeout(function() {
        cloud.removeChild(div);
    }, 2000);
}   

// Controlando a quantidade de "chuva"
setInterval(function() {
    rain();
}, 20);