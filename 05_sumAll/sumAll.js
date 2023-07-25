const sumAll = function(start, end) {
    let error = (start < 0 || end < 0) || !(Number.isInteger(start) && Number.isInteger(end));
    if (error) {
        return("ERROR");
    }
    let mid = (start + end)/2;
    return mid * (Math.abs(end - start) + 1);
};

console.log(sumAll(1, 10));

// Do not edit below this line
module.exports = sumAll;
