function createdImg(percorso, titolo, testo, classe) {
    return `
    <h1 class="text-center py-3 bg-primary text-white">Carosello Immagini</h1>
            <div class="card text-white py-3 w-50 m-auto none my-2 ${classe}">
                <img src="${percorso}" class="card-img image" alt="...">
                <div class="text">
                    <h5 class="">${titolo}</h5>
                    <p class="">${testo}</p>
                </div>
            </div>
            `
}