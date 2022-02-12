// Funcões que desenham a forca
const HEIGHT_HANGMAN = 234;
const WIDTH_HANGMAN = 600;

const HEIGHT_DOTTED = 60;
const WIDTH_DOTTED = 600;

const HEIGHT_LETTER = 30
const WIDTH_LETTER = 40;

const HEIGHT_DRAW_DOTTED = 10;

const SIZE_LETTER = 30;

const ADJUST = 4;

let ctxHangman = document.getElementById('hangman').getContext('2d');
let ctxDotted = document.getElementById('dotted').getContext('2d');


function drawHangman(color) {
    ctxHangman.clearRect(0, 0, WIDTH_HANGMAN, HEIGHT_HANGMAN);
    ctxHangman.closePath();

    ctxHangman.lineCap = 'round';

    mast(color);
    base(color);
    rope(color);
    head(color);
    body(color);
    arms(color);
    feet(color);
}

function base() {
    ctxHangman.beginPath();

    ctxHangman.lineWidth = 6;
    ctxHangman.strokeStyle = 'black';

    ctxHangman.moveTo(240, 230);
    ctxHangman.lineTo(370, 230);
    ctxHangman.stroke();
}

function mast(color) {
    ctxHangman.beginPath();

    ctxHangman.lineWidth = 6;
    ctxHangman.strokeStyle = color;

    ctxHangman.moveTo(270, 230);
    ctxHangman.lineTo(270, 40);
    ctxHangman.stroke();
}

function rope(color) {
    ctxHangman.beginPath();

    ctxHangman.lineWidth = 6;
    ctxHangman.strokeStyle = color;

    ctxHangman.moveTo(240, 40);
    ctxHangman.lineTo(344, 40);
    ctxHangman.moveTo(344, 40);
    ctxHangman.lineTo(344, 54);
    ctxHangman.stroke();
}

function head(color) {
    ctxHangman.beginPath();

    ctxHangman.lineWidth = 4;
    ctxHangman.strokeStyle = color;

    ctxHangman.moveTo(365, 75);
    ctxHangman.arc(345, 75, 20, 0, Math.PI * 2, false);

    ctxHangman.stroke();
}


function headDead() {
    ctxHangman.beginPath();

    ctxHangman.lineWidth = 2;
    ctxHangman.strokeStyle = 'black';

    ctxHangman.moveTo(350, 66);
    ctxHangman.lineTo(356, 72);
    ctxHangman.moveTo(350, 72);
    ctxHangman.lineTo(356, 66);

    ctxHangman.moveTo(334, 66);
    ctxHangman.lineTo(340, 72);
    ctxHangman.moveTo(334, 72);
    ctxHangman.lineTo(340, 66);

    ctxHangman.moveTo(332, 84);
    ctxHangman.arc(344, 93, 15, Math.PI * 1.2, Math.PI * 1.8, false);
    ctxHangman.stroke();
}

function headLife() {
    ctxHangman.beginPath();

    ctxHangman.lineWidth = 2;
    ctxHangman.strokeStyle = 'black';

    ctxHangman.moveTo(341, 69);
    ctxHangman.arc(337, 69, 4, 0, Math.PI * 2, false);

    ctxHangman.moveTo(356, 69);
    ctxHangman.arc(352, 69, 4, 0, Math.PI * 2, false);

    ctxHangman.moveTo(357, 80);
    ctxHangman.arc(345, 72, 15, Math.PI * 0.2, Math.PI * 0.8, false);
    ctxHangman.stroke();
}

function body(color) {
    ctxHangman.beginPath();

    ctxHangman.lineWidth = 4;
    ctxHangman.strokeStyle = color;

    ctxHangman.moveTo(345, 95);
    ctxHangman.lineTo(345, 180);

    ctxHangman.stroke();
}

function arms(color) {
    ctxHangman.beginPath();


    ctxHangman.lineWidth = 4;
    ctxHangman.strokeStyle = color;

    ctxHangman.moveTo(345, 110);
    ctxHangman.lineTo(320, 140);
    ctxHangman.moveTo(345, 110);
    ctxHangman.lineTo(370, 140);

    ctxHangman.stroke();
}

function feet(x, y, color) {
    ctxHangman.beginPath();

    ctxHangman.lineWidth = 4;
    ctxHangman.strokeStyle = color;

    ctxHangman.moveTo(345, 180);
    ctxHangman.lineTo(320, 210);
    ctxHangman.moveTo(345, 180);
    ctxHangman.lineTo(370, 210);

    ctxHangman.stroke();
}

function wordDotted(word) {
    ctxDotted.clearRect(0, 0, WIDTH_DOTTED, HEIGHT_DOTTED);
    ctxDotted.beginPath();

    ctxDotted.font = `Bold ${SIZE_LETTER}px sans-serif`;
    ctxDotted.lineWidth = 4;


    let length = word.length;
    let startPosition = (WIDTH_DOTTED - (length * WIDTH_LETTER)) / 2;

    for (let i = 0; i < length; i++) {
        letterDotted(word[i], startPosition, i);
    }
    ctxDotted.stroke();

}

function letterDotted(letter, start, index) {
    let x = start + (index * WIDTH_LETTER);
    let y = HEIGHT_LETTER;

    if (letter[1]) {
        ctxDotted.fillText(letter[0], x, y);
    }
    ctxDotted.moveTo(x, y + HEIGHT_DRAW_DOTTED);
    ctxDotted.lineTo(x + SIZE_LETTER, y + HEIGHT_DRAW_DOTTED);
}

function drawBody(parts) {
    switch (parts) {
        case 1:
            mast('black');
            break;
        case 2:
            rope('black');
            break;
        case 3:
            head('black');
            break;
        case 4:
            body('black');
            break;
        case 5:
            arms('black');
            break;
        case 6:
            feet('black');
            break;
    }
}