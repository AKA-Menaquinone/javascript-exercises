const fibonacci = function(y) {
    const x = Number(y);
    if (x === 0) {
        return 0;
    } else if (x < 0) {
        return 'OOPS';
    } else {
        let arr = [0, 1];
        for (let i = 1; i < x; i++) {
            arr.push(arr[0] + arr[1])
            arr.shift()
        }
        return arr[1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
