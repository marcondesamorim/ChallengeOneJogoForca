let wordList = [];

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
        messageToast('success', 'Palavra cadastrada!');
    } else {
        messageToast('warning', 'Palavra repetida!')
    }
}

function findWord(word) {
    return result = wordList.find(words => words.contents === word);
}