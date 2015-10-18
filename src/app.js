var uniqueRandomArr = require('unique-random-array');
var qbRankList = require('./qb-rank-list.json');

module.exports = {
    // lists all qb {}'s
    listAll: qbRankList,

    // returns a random player {}
    random: uniqueRandomArr(qbRankList)
};
