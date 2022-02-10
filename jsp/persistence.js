let hangman;
let wordList = [];

try {
    hangman = localStorage.getItem("hangman");
} catch (err0) {
    console.log(erro);
}

initialPersistence();

function initialPersistence() {
    if (hangman == null || !hangman) {
        clearPersistence();
        setInitialPersistence();
    }
    loadWordList();
    if (wordList.length === 0) {
        localStorage.clear();
        setInitialPersistence();
        loadWordList();
    }
}

function clearPersistence() {
    for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        if (key !== null && key.includes("hmg")) {
            localStorage.removeItem(key);
        }
    }
};

function setInitialPersistence() {
    let word;
    try {
        localStorage.setItem('hangman', true);
    } catch (erro) {
        console.log(erro);
    }

    saveWordToPersistence("SELVAGEM");
    saveWordToPersistence("CASA");
    saveWordToPersistence("EXPECTATIVA");
    saveWordToPersistence("HOLLYWOOD");
    saveWordToPersistence("TEMPERATURA");
    saveWordToPersistence("SEMANA");
};


function loadWordList() {
    wordList = [];
    let key, word, aux;
    for (let i = 0; i < localStorage.length; i++) {
        try {
            key = localStorage.key(i);
            if (key !== null && key.includes("hmg")) {
                aux = JSON.parse(localStorage.getItem(key));
                if (!aux.played) {
                    word = new Word(key, aux.content);
                    wordList.push(word);
                }
            }
        } catch (erro) {
            console.log(erro)
        }
    };
}

function saveWord() {
    let content = inputNovaPalavra.value;
    if (content != null && content.length > 0) {
        if (typeof findWord(content) === "undefined") {
            if (saveWordToPersistence(content)) {
                messageUser('success');
            } else {
                messageUser('error');
            }
        } else {
            messageUser('warning');

        }
        inputNovaPalavra.value = "";
    }
}

function saveWordToPersistence(content) {
    let word;
    let key = "hmg" + localStorage.length;
    let aux = JSON.stringify({
        content: content,
        played: false
    });

    try {
        localStorage.setItem(key, aux)
    } catch (erro) {
        console.log(erro);
        return false;
    } finally {
        word = new Word(key, content, false);
        wordList.push(word);
        return true;
    }
};

function findWord(content) {
    return result = wordList.find(words => words.content === content);
}