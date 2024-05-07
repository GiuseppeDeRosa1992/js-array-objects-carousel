function createdImg(percorso, titolo, testo) {
    return `
            <div class="card text-bg-dark my-3 w-50 m-auto">
                <img src="${percorso}" class="card-img" alt="...">
                <div class="text">
                    <h5 class="">${titolo}</h5>
                    <p class="">${testo}</p>
                </div>
            </div>
            `
}