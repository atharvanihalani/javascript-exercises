const removeFromArray = function() {
    let elts = [...arguments].slice(1);
    elts.forEach(elt => {
        while (arguments[0].includes(elt)) {
            let index = arguments[0].indexOf(elt);
            arguments[0].splice(index, 1);
        }
    })
    return arguments[0];
};
removeFromArray([1, 2, 42]);

// Do not edit below this line
module.exports = removeFromArray;
