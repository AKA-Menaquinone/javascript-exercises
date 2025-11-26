const removeFromArray = function(arr, ...exclude) {
    for (i = 1; i <= exclude.length; i++) {
        filtered = arr.filter((x) => !exclude.includes(x))
    }
    return filtered
};

// Do not edit below this line
module.exports = removeFromArray;
