const slide = [
    { titolo: "Videogioco 1", paragrafo: "testo breve che descrive il gioco", foto: "./img/01.web" },
    { titolo: "Videogioco 2", paragrafo: "testo breve che descrive il gioco", foto: "./img/02.web" },
    { titolo: "Videogioco 3", paragrafo: "testo breve che descrive il gioco", foto: "./img/03.web" },
    { titolo: "Videogioco 4", paragrafo: "testo breve che descrive il gioco", foto: "./img/04.web" },
    { titolo: "Videogioco 5", paragrafo: "testo breve che descrive il gioco", foto: "./img/05.web" },
];

let singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="./img/01.webp" class="slide active" alt="">
<button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
<button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `
