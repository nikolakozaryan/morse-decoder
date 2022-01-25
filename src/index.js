const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    if (expr.length % 10) {
        expr = new Array(10 - expr.length % 10).fill(0).join('') + expr;
    }

    const letters = [];
    for (let i = 0; i < expr.length; i += 10) {
        letters.push(expr.slice(i, i + 10))
    }

    let words = letters.map(item => {
        let pieces = [];
        for (let i = 0; i < 10; i += 2) {
            pieces.push(item.slice(i, i + 2))
        }

        let morse = pieces.map(item => {
            if (item === '11') return '-'
            else if (item === '10') return '.'
            else if (item === '**') return ' '
            else return ''
        })
        return morse.join('')
    })
    return words.map(item => MORSE_TABLE[item] ? MORSE_TABLE[item] : ' ').join('')
}

module.exports = {
    decode
}