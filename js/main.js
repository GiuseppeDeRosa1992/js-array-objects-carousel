//richiamo il tag div con classe container dall'html
let div = document.querySelector("div")

//variabile di appoggio prt indice
let iActive = 0



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


// //Richiamo tramite id il bottone successivo dell'html
// document.getElementById("next").addEventListener("click", function () {
//     if (iActive <= 4) {
//         div.innerHTML = createdImg(objectsImages[iActive].image, objectsImages[iActive].title, objectsImages[iActive].text, "block")
//         iActive++
//     }
//     else if (iActive = 4) {
//         iActive = 0
//         div.innerHTML = createdImg(objectsImages[iActive].image, objectsImages[iActive].title, objectsImages[iActive].text, "block")
//         iActive++
//     }

// })

//Richiamo tramite id il bottone precedente dell'html
document.getElementById("previous").addEventListener("click", function () {
    //se iactive è maggiore di 0 allora decrementa di 1 e poi stampa
    if (iActive > 0) {
        iActive--
        div.innerHTML = createdImg(objectsImages[iActive].image, objectsImages[iActive].title, objectsImages[iActive].text, "block")
    }  
    else {
        iActive = 4
        div.innerHTML = createdImg(objectsImages[iActive].image, objectsImages[iActive].title, objectsImages[iActive].text, "block")
    }
})

//setinterval che mi fa partire le slide e cambiano ogni secondo e mezzo senza che clicco
setInterval(() => {
    if (iActive <= 4) {
        div.innerHTML = createdImg(objectsImages[iActive].image, objectsImages[iActive].title, objectsImages[iActive].text, "block")
        iActive++
    }
    else if (iActive = 4) {
        iActive = 0
        div.innerHTML = createdImg(objectsImages[iActive].image, objectsImages[iActive].title, objectsImages[iActive].text, "block")
        iActive++
    }
}, 1500);

