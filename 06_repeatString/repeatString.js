const repeatString = function(text, num) {
    let result = text;
    if (num < 0) {
        return 'ERROR';
    } else if (num === 0) {
        return ''
    } else {
        for (let x = 1; x < num; x++) {
            result += text;
        }
    }
    return result
};

// Do not edit below this line
module.exports = repeatString;
