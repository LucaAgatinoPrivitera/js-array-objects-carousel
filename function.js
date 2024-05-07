// Funzione che mi porta avanti di 1
function next() {
    if (c < slide.length - 1) {
        c = c + 1;
        singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[c].foto}" class="slide active" alt="">
<h2>${slide[c].titolo}</h2>
<p>${slide[c].paragrafo}</p>
<button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
<button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;
    }
    else {
        console.log("giochi finiti vai su steam a comprarne altri")
        c = -1;
        singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[c].foto}" class="slide active" alt="">
        <h2>${slide[c].titolo}</h2>
        <p>${slide[c].paragrafo}</p>
        <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
        <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `; //Stesso codice ma questo da errore BOH
    }
}

// Funzione che mi porta indietro di 1
function prev() {
    if (c > 0) {
        c = c - 1;
        singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[c].foto}" class="slide active" alt="">
        <h2>${slide[c].titolo}</h2>
        <p>${slide[c].paragrafo}</p>
        <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
        <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;
    }
    else {
        console.log("giochi finiti vai su steam a comprarne altri")
        c = slide.length - 1;
        singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[c].foto}" class="slide active" alt="">
        <h2>${slide[c].titolo}</h2>
        <p>${slide[c].paragrafo}</p>
        <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
        <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `; //Stesso codice ma questo da errore BOH
    }
}

function autoplay(){
    if (c < slide.length - 1) {
        c = c + 1;
        singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[c].foto}" class="slide active" alt="">
<h2>${slide[c].titolo}</h2>
<p>${slide[c].paragrafo}</p>
<button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
<button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;
    }
    else {
        console.log("giochi finiti vai su steam a comprarne altri")
        c = -1;
        singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[c].foto}" class="slide active" alt="">
        <h2>${slide[c].titolo}</h2>
        <p>${slide[c].paragrafo}</p>
        <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
        <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `; //Stesso codice ma questo da errore BOH
    }
}