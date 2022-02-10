let word;
let peelWord
let bodyParts;
const PERDEU = 7;

console.log(localStorage);
console.log(wordList);

makeKeyboard();

round();

function round() {
    if (wordList.length !== 0) {

        enableKeyboard();

        bodyParts = 0;

        word = sortWord();

        peelWord = peel(word.content);

        console.log(paintWord(peelWord));
    } else {
        console.log("Acabou as palavras!");
    }
}

function peel(word) {
    let peel = [];

    for (let i = 0; i < word.length; i++) {
        peel[i] = new Array(word[i], false);
    }
    return peel;
}

function sortWord() {
    let index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
}

function paintWord(word) {
    console.log("\n");
    let aux = "";
    for (let i = 0; i < word.length; i++) {
        if (!word[i][1]) { //se não achou a letra
            aux += "_ "
        } else {
            aux += word[i][0] + " ";
        }
    }
    return aux;
}

function checkLetter(letter) {
    let found = false;
    let ganhou = true;
    for (let i = 0; i < peelWord.length; i++) {
        if (peelWord[i][0] === letter) {
            peelWord[i][1] = true;
            found = true;
        }
        if (!peelWord[i][1]) {
            ganhou = false;
        }
    }
    console.log(paintWord(peelWord));
    if (ganhou) {
        localStorage.setItem(word.key, JSON.stringify({
            content: word.content,
            played: true
        }));
        loadWordList();
        console.log("Você acertou a palavra!");
        console.log(wordList);
        round();
    }
    if (!found) {
        bodyParts++; //desenha um parte do corpo
    }

    if (bodyParts >= PERDEU) {
        console.log("Você foi enforcado!");
        round();
    }
}