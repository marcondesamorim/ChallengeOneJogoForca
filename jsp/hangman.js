let btnIniciar = document.getElementById("iniciar-jogo");
btnIniciar.addEventListener("click", startGame);


function startGame() {
    window.location.href = "./pages/game.html";
}

let inputNovaPalavra = document.getElementById("input-nova-palavra");
inputNovaPalavra.addEventListener('keyup', verifyWord);

inputNovaPalavra.addEventListener('keydown', (event) => {
    if (event.key === 13) {
        event.preventDefault();
        btnNovaPalavra.click();
    }
});


let btnNovaPalavra = document.getElementById("nova-palavra");
btnNovaPalavra.addEventListener("click", addWord);