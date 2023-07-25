const reverseString = function(string) {
    let strArr = [...string];
    return strArr.reduceRight((prevVal, letter) => prevVal + letter, "")
};

reverseString("test");

// Do not edit below this line
module.exports = reverseString;
