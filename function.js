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

function autoplay() {
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






//Qui iniziano i vari select delle thumbnail
function select() {
    singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[0].foto}" class="slide active" alt="">
        <h2>${slide[0].titolo}</h2>
        <p>${slide[0].paragrafo}</p>
        <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
        <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;
}

function select2() {
    singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[1].foto}" class="slide active" alt="">
        <h2>${slide[1].titolo}</h2>
        <p>${slide[1].paragrafo}</p>
        <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
        <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;
}

function select3() {
    singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[2].foto}" class="slide active" alt="">
    <h2>${slide[2].titolo}</h2>
    <p>${slide[2].paragrafo}</p>
    <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
    <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;
}

function select4() {
    singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[3].foto}" class="slide active" alt="">
    <h2>${slide[3].titolo}</h2>
    <p>${slide[3].paragrafo}</p>
    <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
    <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;
}

function select5() {
    singolaSlide = document.querySelector(".carosello").innerHTML = `<img src="${slide[4].foto}" class="slide active" alt="">
    <h2>${slide[4].titolo}</h2>
    <p>${slide[4].paragrafo}</p>
    <button id="btnPrev"><i class="fa-solid fa-arrow-up"></i></button>
    <button id="btnNext"> <i class="fa-solid fa-arrow-down"></i></button> `;
}