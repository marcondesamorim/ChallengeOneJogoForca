let btnIniciar = document.getElementById("iniciar-jogo");
btnIniciar.addEventListener("click", startGame);

function startGame() {
    window.location.href = "./pages/game.html";
}


let inputNovaPalavra = document.getElementById("input-nova-palavra");
inputNovaPalavra.addEventListener('keyup', verifyWord);

let btnNovaPalavra = document.getElementById("nova-palavra");
btnNovaPalavra.addEventListener("click", addWord)

function verifyWord(event) {
    inputNovaPalavra.value = inputNovaPalavra.value.replace(/([^a-z]+)/gi, "").toUpperCase();
    if (event.keyCode === 13) {
        event.preventDefault();
        btnNovaPalavra.click();
    }
}

function addWord() {
    if (typeof findWord(inputNovaPalavra.value) === "undefined") {
        saveWord(inputNovaPalavra.value);
        var mensagem = "<strong>Palavra cadastrada!</strong><br>";
        mostraDialogo(mensagem, "primary", 2000);

    } else {

        var mensagem = "<strong>Palavra já cadastrada!</strong><br>";
        mostraDialogo(mensagem, "danger", 3000);
    }

}