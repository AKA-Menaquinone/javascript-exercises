const palindromes = function (x) {
    const str = x.replace(/[^a-zA-z0-9]/g, '').toLowerCase();
    const reversed = str.split('').reverse().join('');

    if (str == reversed) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
