const sumAll = function(x, y) {
    if (x < 0 || y < 0 || !Number.isInteger(x) || !Number.isInteger(y)) {
        return 'ERROR';
    }

    args = Array.from(arguments).sort()

    let sum = 0;
    for (let z = args[0]; z <= args[1]; z++) {
        sum += z;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
