let wordList = [];

function verifyWord(event) {
    inputNovaPalavra.value = inputNovaPalavra.value.replace(/([^a-z]+)/gi, "").toUpperCase();
}

function addWord() {
    let word = inputNovaPalavra.value;
    if (word != null && word.length > 0) {
        if (typeof findWord(word) === "undefined") {
            if (saveWordToPersistence(inputNovaPalavra.value)) {
                messageToast('success', 'Palavra cadastrada!');
            } else {
                messageToast('error', 'Não foi possível salvar a palavra!');
            }
        } else {
            messageToast('warning', 'Palavra repetida!')
        }
    }
}

function findWord(word) {
    return result = wordList.find(words => words.contents === word);
}