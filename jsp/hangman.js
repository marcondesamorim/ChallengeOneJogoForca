// Janela Inicial do Jogo
let btnIniciar = document.getElementById("iniciar-jogo");

btnIniciar.addEventListener("click", startGame);

function startGame() {
    window.location.href = "./pages/round.html";
}

// Expressão regular que filtra as palavras adicionadas
let inputNovaPalavra = document.getElementById("input-nova-palavra");
inputNovaPalavra.addEventListener('keyup', (event) => {
    inputNovaPalavra.value = inputNovaPalavra.value.replace(/([^a-z]+)/gi, "").toUpperCase();
});

inputNovaPalavra.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        btnNovaPalavra.click();
    }
});

let btnNovaPalavra = document.getElementById("nova-palavra");
btnNovaPalavra.addEventListener("click", saveWord);