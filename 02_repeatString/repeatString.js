const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    bigString = ""
    for (let i = 0; i < num; i++) {
        bigString = bigString.concat(string);
    }
    return bigString;
};


// Do not edit below this line
module.exports = repeatString;
