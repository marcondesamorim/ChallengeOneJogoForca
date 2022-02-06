let hangmanPersistence = localStorage.getItem("hangmanPersistence");
let wordList = [];

//check if the word list exists
if (hangmanPersistence == null || !hangmanPersistence){
    clearWords();
    setInitialWords();
}

loadWordList();

function clearWords() {
    for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        if (key !== null && key.includes("hmg")) {
            localStorage.removeItem(key);
        }
        console("clean");
    }
};

function setInitialWords(){
    let word;
    localStorage.setItem('hangmanPersistence', true);

    localStorage.setItem("hmg1", contentsToWordJson("TEMPERATURA"));
    localStorage.setItem("hmg2", contentsToWordJson("CASA"));
    localStorage.setItem("hmg3", contentsToWordJson("EXPECTATIVA"));
    localStorage.setItem("hmg4", contentsToWordJson("HOLLYWOOD"));
    localStorage.setItem("hmg5", contentsToWordJson("TEMPERATURA"));
    localStorage.setItem("hmg6", contentsToWordJson("SEMANA"));
};


function loadWordList() {
    let key, word;
    for (let i = 0; i < localStorage.length; i++) {
        key = localStorage.key(i);
        if (key !== null && key.includes("hmg")) {
            word = JSON.parse(localStorage.getItem(key));
            wordList.push(word);
        }
    }
    return wordList;
};
    
function saveWord(contents){
    let wordJson = contentsToWordJson(contents);
    let key = "hmg" + localStorage.length;

    localStorage.setItem(key , wordJson)
    wordList.push(JSON.parse(localStorage.getItem(key)));

    console.log(localStorage);
    console.log(wordList);
};

function findWord(word){
    return result = wordList.find( words => words.contents === word );
}

function contentsToWordJson(contents){
    return JSON.stringify({
        contents: contents,
        played: false
    });
}