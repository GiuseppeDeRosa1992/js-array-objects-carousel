function createdImg(percorso, titolo, testo, classe) {
    return `
            <div class="card text-white py-3 w-50 m-auto none my-2 ${classe}">
                <img src="${percorso}" class="card-img image" alt="...">
                <div class="text">
                    <h5 class="">${titolo}</h5>
                    <p class="">${testo}</p>
                </div>
            </div>
            `
}