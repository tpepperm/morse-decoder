const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var finalWord = [];
    for(let i = 0; i < expr.length; i += 10) {
        var morseLetter = "";
        var letter = expr.slice(i, i+10);
        if (letter[0] === "*") {
            finalWord.push(" ");
            continue;
        }
        var j = 0;
        while (j < letter.length) {
            if (letter[j] === "1") {
                if (letter[j+1] === "0") {
                    morseLetter = morseLetter.concat(".");
                } else if (letter[j+1] === "1") {
                    morseLetter = morseLetter.concat("-");
                }
                j += 2;
            } else {
                j += 1;
            }
        }
        finalWord.push(MORSE_TABLE[morseLetter]);
    }
    return finalWord.join("");
}

module.exports = {
    decode
}