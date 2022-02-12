// Round é cada jogada realizada
let word; // A palavra usada na rodada
let peelWord // Desmonto a palavra e associo cada letra a um booleano que indica  se foi descoberta ou não
let bodyParts; // Parte do corpo ou número de rodada que errou o palpite
let quantLetters; //Número de letrar
let hintDone; // Já deu a dica???
const LOST = 6; //Número de rodadas
const HINT = LOST - 1; //Quando é para dar a dica

makeKeyboard(); // construindo o teclado dinamicamente

round(); //jogada inicial

function round() {
    if (wordList.length !== 0) { //Enquanto tiver palavra, jogue
        hintDone = false;

        drawHangman('silver'); // Pinta o corpo de cinza indicando que nenhuma palavra foi acertada

        clearKeyboard(); // Limpa as jogadas no teclado

        bodyParts = 0; //Nenhuma palavra acertada

        word = sortWord(); //Sorteia uma palavra da lista

        peelWord = peel(word.content); // Desmonta a palavra, associado cada letra com um booleano para indicar que foi descoberta ou não

        wordDotted(peelWord); // Pinta a palavra deixando vsível as letras descobertas (usando o valor boleano associado)

        uniqueLetters = new Set(word.content); //Monta as letras únicas da palavra 
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
    let index = Math.floor(Math.random() * wordList.length); // Sorteia a palavra 
    return wordList[index];
}


function checkLetter(letter) {
    let found = false; // Função que verifica se acertou ou não a letra

    // Verifica se a letra tá na palavra sorteada
    for (let i = 0; i < peelWord.length; i++) {
        if (peelWord[i][0] === letter) { // Se tiver
            peelWord[i][1] = true; // Marca como encontrada
            found = true; //Diz que achou a palavra
            uniqueLetters.delete(letter); // E remove a letra das palavras únicas
            wordDotted(peelWord);
        }
    }

    if (uniqueLetters.size == 0) { // Se descobriu todas a palavras 
        localStorage.setItem(word.key, JSON.stringify({ // Salva a palavra como descoberta
            content: word.content,
            played: true
        }));
        loadWordList(); //Recarrega as palavras da base de dados
        drawHangman('black'); // Pinta o corpo de preto indicando que descobriu todas a palavras
        headLife(); // Põe a carinha feliz
        wordDotted(peelWord);
        message("Você acertou a palavra!", round);
    }

    if (!found) {
        bodyParts++;
        drawBody(bodyParts);
    }

    // Se chegar na dica, não teve dica ainda e tem pelo menos duas letras ainda não descobertas    
    if (bodyParts == HINT && !hintDone && uniqueLetters.size >= 2) {
        messageQuestion('Dica?', showHint); // Pergunta se quer a dica
    }

    // Se desenhou todas a partes do corpo
    if (bodyParts >= LOST) {
        headDead();
        wordDotted(peelWord);
        message('Você perdeu!', round);
    }
}

// Mostra a dica, marca a palavra como descoberta e pinta o corpo e desabilita a tecla
function showHint() {
    let i = 0;
    let letter;
    while (i < peelWord.length) { // Marca todas a letra da palavra
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
    wordDotted(peelWord); //Pinta o corpo
}