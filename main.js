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
<h2>${slide[c].titolo}</h2>
<p>${slide[c].paragrafo}</p>`;

let buttonNext = document.getElementById("btnNext");
const buttonPrev = document.getElementById("btnPrev");
buttonNext.addEventListener("click", function () { //Gira solamente 1 volta
    next();
})
buttonPrev.addEventListener("click", function () { //Gira solamente 1 volta
    prev();
})

//Bonus 2 Autoplay
// setInterval(autoplay, 3 * 1000)

let t1 = document.querySelector("#primo");
let t2 = document.querySelector("#secondo");
let t3 = document.querySelector("#terzo");
let t4 = document.querySelector("#quarto");
let t5 = document.querySelector("#quinto");

t1.addEventListener("click", function () {
    select();
})

t2.addEventListener("click", function () {
    select2();
})

t3.addEventListener("click", function () {
    select3();
})

t4.addEventListener("click", function () {
    select4();
})

t5.addEventListener("click", function () {
    select5();
})