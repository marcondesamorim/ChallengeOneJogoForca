let word;
let peelWord
let bodyParts;
let quantLetters;
let hintDone;
const LOST = 6;
const HINT = LOST - 1;

console.log(localStorage);
console.log(wordList);

makeKeyboard();

round();

function round() {
    if (wordList.length !== 0) {
        hintDone = false;

        drawHangman('silver');

        clearKeyboard();

        bodyParts = 0;

        word = sortWord();

        peelWord = peel(word.content);

        wordDotted(peelWord);

        uniqueLetters = new Set(word.content);
        console.log(word.content);
    } else {
        message('Acabou as palavras!');
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


function checkLetter(letter) {
    let found = false;

    for (let i = 0; i < peelWord.length; i++) {
        if (peelWord[i][0] === letter) {
            peelWord[i][1] = true;
            found = true;
            uniqueLetters.delete(letter);
            wordDotted(peelWord);
        }
    }

    if (uniqueLetters.size == 0) {
        localStorage.setItem(word.key, JSON.stringify({
            content: word.content,
            played: true
        }));
        loadWordList();
        drawHangman('black');
        headLife();
        wordDotted(peelWord);
        message("Você acertou a palavra!", round);
    }

    if (!found) {
        bodyParts++;
        drawBody(bodyParts);
    }

    if (bodyParts == HINT && !hintDone && uniqueLetters.size >= 2) {
        messageQuestion('Dica?', showHint);
    }

    if (bodyParts >= LOST) {
        headDead();
        wordDotted(peelWord);
        message('Você perdeu!', round);
    }
}


function showHint() {
    let i = 0;
    let letter;
    while (i < peelWord.length) {
        letter = peelWord[i][0];
        if (!peelWord[i][1]) {
            for (let j = i; j < peelWord.length; j++) {
                if (letter === peelWord[j][0]) {
                    peelWord[j][1] = true;
                }
            }
            uniqueLetters.delete(letter);
            disableKey(letter);
            break;
        }
        i++;
    }
    hintDone = true;
    wordDotted(peelWord);
}