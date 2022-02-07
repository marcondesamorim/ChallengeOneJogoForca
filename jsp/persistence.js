let hangmanPersistence = localStorage.getItem("hangmanPersistence");


function initialPersistence() {
    if (hangmanPersistence == null || !hangmanPersistence) {
        clearPersistence();
        setInitialPersistence();
    }
    loadPersistenceToWordList();
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
    localStorage.setItem('hangmanPersistence', true);

    localStorage.setItem("hmg1", contentsToWordJson("TEMPERATURA"));
    localStorage.setItem("hmg2", contentsToWordJson("CASA"));
    localStorage.setItem("hmg3", contentsToWordJson("EXPECTATIVA"));
    localStorage.setItem("hmg4", contentsToWordJson("HOLLYWOOD"));
    localStorage.setItem("hmg5", contentsToWordJson("TEMPERATURA"));
    localStorage.setItem("hmg6", contentsToWordJson("SEMANA"));
};


function loadPersistenceToWordList() {
    let key, word;
    for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        if (key === '') {
            localStorage.removeItem(key);
        } else {
            if (key !== null && key.includes("hmg")) {
                word = JSON.parse(localStorage.getItem(key));
                wordList.push(word);
            }
        }
    }
};

function saveWordToPersistence(contents) {
    let wordJson = contentsToWordJson(contents);
    let key = "hmg" + localStorage.length;

    try {
        localStorage.setItem(key, wordJson)
    } catch (e) {
        console.log(e);
        return false;
    } finally {
        wordList.push(JSON.parse(localStorage.getItem(key)));
        return true;
    }
};