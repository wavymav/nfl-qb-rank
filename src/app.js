var uniqueRandomArr = require('unique-random-array');
var qbRankList = require('./qb-rank-list.json');

var getRandomItem = uniqueRandomArr(qbRankList);

var random = function(number) {

    if (number === undefined) {

        return getRandomItem();

    } else {

        var randomItems = [];

        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }

        return randomItems;

    }
};

module.exports = {
    
    // lists all qb {}'s
    listAll: qbRankList,

    // returns a random player {}
    random: random

};
