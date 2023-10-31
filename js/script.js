// três constantes para referenciar as "ITEM" divs do Projetos - é assim que se cria o comentário linha
/* é assim que se cria o comentário bloco */
const album = document.getElementById('albumFotos');
const casamentos = document.getElementById('casamentos');
const buffet = document.getElementById('buffet');

// três constantes para referenciar os ID' do Iframes
const videoAlbum = document.querySelector('#videoAlbum');

// Evento do Click
album.addEventListener ('click', () => {
    album.classList.toggle('active');
    videoAlbum.classList.toggle ('active');
});

casamentos.addEventListener ('click', () => {
    casamentos.classList.toggle('active');
    videoCasamentos.classList.toggle ('active');
});

buffet.addEventListener ('click', () => {
    buffet.classList.toggle('active');
    videoBuffet.classList.toggle ('active');
});


