const findTheOldest = function(x) {
    const currentYear = new Date().getFullYear();
    /* const result = x.map((y) => y.age = y.yearOfDeath - y.yearOfBirth); */
    const result = x.map(function(y) {
        if (y.yearOfDeath == undefined) {
            y.age = currentYear - y.yearOfBirth
        } else {
            y.age = y.yearOfDeath - y.yearOfBirth
        }
    })
    x.sort((a, b) => b.age - a.age);
    return x[0];
};

// Do not edit below this line
module.exports = findTheOldest;
