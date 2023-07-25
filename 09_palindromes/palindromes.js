const palindromes = function (str) {
    let stripped = str.toLowerCase();
    stripped = stripped.replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    stripped = stripped.replaceAll(" ", "");

    rev = [...stripped];
    rev = rev.reduceRight((prevVal, letter) => prevVal + letter, "")

    return rev == stripped;
};

console.log(palindromes('A car, a man, a maraca.'));


// Do not edit below this line
module.exports = palindromes;
