// Array che contiene tutte le slide
const slide = [
    { titolo: "Videogioco 1", paragrafo: "testo breve che descrive il gioco", foto: "./img/01.webp" },
    { titolo: "Videogioco 2", paragrafo: "testo breve che descrive il gioco", foto: "./img/02.webp" },
    { titolo: "Videogioco 3", paragrafo: "testo breve che descrive il gioco", foto: "./img/03.webp" },
    { titolo: "Videogioco 4", paragrafo: "testo breve che descrive il gioco", foto: "./img/04.webp" },
    { titolo: "Videogioco 5", paragrafo: "testo breve che descrive il gioco", foto: "./img/05.webp" },
];

// Contatore da incrementare ad ogni click
let c = 0;

// Slide iniziale
let singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[c].foto}" class="slide active" alt="">
<button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
<button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;

let buttonNext = document.getElementById("btnNext");
const buttonPrev = document.getElementById("btnPrev");
buttonNext.addEventListener("click", function(){ //Gira solamente 1 volta
    next();
})

