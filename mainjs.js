let ourTeam = [
    { Nome: "Wayne Barnett", Ruolo: "Founder & CEO", foto: "wayne-barnett-founder-ceo.jpg" },
    { Nome: "Angela Caroll", Ruolo: "Chief Editor", foto: "angela-caroll-chief-editor.jpg" },
    { Nome: "Walter Gordon", Ruolo: "Office Manager", foto: "walter-gordon-office-manager.jpg" },
    { Nome: "Angela Lopez", Ruolo: "Social Media Manager", foto: "angela-lopez-social-media-manager.jpg" },
    { Nome: "Scott Estrada", Ruolo: "Developer", foto: "scott-estrada-developer.jpg" },
    { Nome: "Barbara Ramos", Ruolo: "Graphic Designer", foto: "barbara-ramos-graphic-designer.jpg" },
]


// con questo stampo tutto il primo oggetto
console.log(ourTeam[0])

let array = [];







let immagineAttualmenteAttiva;
let prossimaSlide;
let prevSlide;

let slides = document.getElementsByClassName("slide");

document.getElementById("btnNext").addEventListener("click", function nextImage() {
    for (let i = 0; i < slides.length; i++) {

        const slide = slides[i]; //non ho ben capito perché qui prenda tutti gli i, invece di solamente l'ultimo. Ricollego il dubbio alla riga 17
        console.log(`i ${i}, slide ${slide}`);

        //controlliamo se questa slide ha la classe active
        if (slide.classList.contains("active")) {
            // Si toglie la classe, può confondere il fatto che questo testo sia simile e quindi da l'impressione di un merge
            slide.classList.remove("active");
            immagineAttualmenteAttiva = i;
        }
    }

    //prossima slide sarà idealmente quella attuale + 1
    prossimaSlide = immagineAttualmenteAttiva + 1;

    //se però l'immagine successiva non c'è, allora resetta la slide alla prima
    if (prossimaSlide >= slides.length) {
        //non può essere più grande o uguale, altrimenti al click non ci sarà nessuna immagine da visualizzare
        prossimaSlide = 0;
    }

    //in ogni caso, rendi active la slide che ci interessa
    slides[prossimaSlide].classList.add("active");

    console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prossimaSlide}`);
})

document.getElementById("btnPrev").addEventListener("click", function prevImage() {
    for (let i = 0; i < slides.length; i++) {

        const slide = slides[i];
        console.log(`i ${i}, slide ${slide}`);

        //controlliamo se questa slide ha la classe active
        if (slide.classList.contains("active")) {

            slide.classList.remove("active");
            immagineAttualmenteAttiva = i;
        }
    }

    //precedente slide sarà idealmente quella attuale - 1
    prevSlide = immagineAttualmenteAttiva - 1;
    console.log(prevSlide); //IMPORTANTE PERCHÈ ALTRIMENTI VIENE MESSO A -1 QUANDO LA FOTO È 0

    //se però l'immagine precedente non c'è, allora resetta la slide all'ultima
    if (prevSlide <= 0) {
        //aiuto visivo per me, non è un merge
        prevSlide = 4;
    }

    //in ogni caso, rendi active la slide che ci interessa
    slides[prevSlide].classList.add("active");

    console.log(`Sposto la selezione da ${immagineAttualmenteAttiva} a ${prevSlide}`);
})