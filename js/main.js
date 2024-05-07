//richiamo il tag div con classe container dall'html
let div = document.querySelector("div")

let arrayImg = document.getElementsByClassName("image")
console.log(arrayImg)

let imgBlock;
let nextImg;

//Creo lista oggetti di tutte le immagini
const objectsImages = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


document.getElementById("next").addEventListener("click", function () {
    // Creo ciclo for che mi cicla sulla lunghezza della lista e dentro richiao una funzione che ogni giro mi crea l'immagine da mettere
    for (let i = 0; i < objectsImages.length; i++) {
        let arrayImages = objectsImages[i]
        div.innerHTML += createdImg(arrayImages.image, arrayImages.title, arrayImages.text)
    }
    //se img contiene block allora glielo rimuovo
    if (arrayImages.classList.contains("block")) {
        arrayImages.classList.remove("block");
        console.log("ho tolto block all'immagine?", i);
        //do alla variabile imgBlock lo stesso valore di i senno non viene visto fuori dal ciclo questo valore
        imgBlock = i;
    }
    
})


