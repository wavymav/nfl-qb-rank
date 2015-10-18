var expect = require('chai').expect;
var qbRankList = require('./app');

describe('nfl-qb-rank', function() {

    // testing listAll
    describe('listAll', function() {
        it('should be an array of objects', function() {

            expect(qbRankList.listAll).to.satisfy(isArrayOfObjects);

            function isArrayOfObjects(array) {
                return array.every(function(item) {
                    return typeof item === 'object';
                });
            }

        });
    });

    // testing random()
    describe('random', function() {
        it('should return a random item from the from qbRankList.listAll', function() {

            var randomItem = qbRankList.random();

            expect(qbRankList.listAll).to.include(randomItem);

      });
    });
});
