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
    var result = "";
    var temp = "";
    var spaceWord = "";
    for(var i=0; i < expr.length; i+=10)
    {
        var subStr = expr.substring(i,i + 10).replace(/00/g, "").replace(/10/g, ".").replace(/11/g, "-");
        if(subStr.includes("*"))
            result += " ";
        else 
            result += MORSE_TABLE[subStr];
    }
    if(expr.length % 10 > 0)
        result += MORSE_TABLE[expr.substring(expr.length - 1 - expr.length % 10, expr.length - 1)
                                  .replace(/00/g, "")
                                  .replace(/10/g, ".")
                                  .replace(/11/g, "-")
                                ];
    return result;
}

module.exports = {
    decode
}