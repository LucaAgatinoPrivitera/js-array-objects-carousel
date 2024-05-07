// Funzione che mi porta avanti di 1
function next() {
    if (c < slide.length - 1) {
        c = c + 1;
        singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[c].foto}" class="slide active" alt="">
    <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
    <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;
    }
    else {
        console.log("giochi finiti vai su steam a comprarne altri")
        c = -1;
        singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[c].foto}" class="slide active" alt="">
        <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
        <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `; //Stesso codice ma questo da errore BOH
    }
}
