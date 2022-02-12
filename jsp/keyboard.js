// Gerenciador do teclado criado dinamicamente
function makeKeyboard() {
    let divKey = document.getElementById('key');

    let line1 = document.createElement('div');
    line1.id = "line1"
    line1.className = "keys";
    line1.style = "text-align:center; margin: 10px 0px;"
    divKey.appendChild(line1);
    line1.appendChild(createButton('Q'));
    line1.appendChild(createButton('W'));
    line1.appendChild(createButton('E'));
    line1.appendChild(createButton('R'));
    line1.appendChild(createButton('T'));
    line1.appendChild(createButton('Y'));
    line1.appendChild(createButton('U'));
    line1.appendChild(createButton('I'));
    line1.appendChild(createButton('O'));
    line1.appendChild(createButton('P'));

    let line2 = document.createElement('div');
    line2.id = "line2"
    line2.className = "keys";
    line2.style = "text-align:center; margin: 10px 0px;"
    line1.appendChild(line2);
    line2.appendChild(createButton('A'));
    line2.appendChild(createButton('S'));
    line2.appendChild(createButton('D'));
    line2.appendChild(createButton('F'));
    line2.appendChild(createButton('G'));
    line2.appendChild(createButton('H'));
    line2.appendChild(createButton('J'));
    line2.appendChild(createButton('K'));
    line2.appendChild(createButton('L'));

    let line3 = document.createElement('div');
    line3.id = "line3"
    line3.className = "keys";
    line3.style = "text-align:center; margin: 10px 0px;"
    line2.appendChild(line3);
    line3.appendChild(createButton('Z'));
    line3.appendChild(createButton('X'));
    line3.appendChild(createButton('C'));
    line3.appendChild(createButton('V'));
    line3.appendChild(createButton('B'));
    line3.appendChild(createButton('N'));
    line3.appendChild(createButton('M'));

    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.className = "btn-primary";
    };
}

function clearKeyboard() {
    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        button.disabled = false;
        button.style.backgroundColor = "CornflowerBlue";
    };
}

function disableKey(key) {
    let button = document.getElementById(key);
    button.disabled = true;
    button.style.backgroundColor = "lightblue";
}

function createButton(letter) {
    let button = document.createElement('button');
    button.id = letter;
    button.onclick = function(event) { keyPress(event) };
    button.innerHTML = letter;
    return button;
}

function keyPress(event) {
    let button = event.target;
    button.disabled = true;
    button.style.backgroundColor = "lightblue";
    checkLetter(button.id[0]);
}