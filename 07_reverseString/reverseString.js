const reverseString = function(text) {
    let result = '';
    const textLength = text.length;

    for (let i = textLength - 1; i >= 0; i--) {
        result += text[i]
    }
    return result
};

// Do not edit below this line
module.exports = reverseString;
