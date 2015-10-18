var expect = require('chai').expect;
var qbRankList = require('./app');

describe('nfl-qb-rank', function() {

    // testing listAll
    describe('listAll', function() {

        it('should be an array of objects', function() {

            var isArrayOfObjects = function(array) {
                return array.every(function(item) {
                    return typeof item === 'object';
                });
            };

            expect(qbRankList.listAll).to.satisfy(isArrayOfObjects);

        });

    });

    // testing random()
    describe('random', function() {

        it('should return a random item from the from qbRankList.listAll', function() {

            var randomItem = qbRankList.random();

            expect(qbRankList.listAll).to.include(randomItem);

        });

        it('should return an array of random items if passed a number', function() {

            var randomItems = qbRankList.random(5);

            expect(randomItems).to.have.length(5);

            randomItems.forEach(function(item) {
                expect(qbRankList.listAll).to.include(item);
            });

        });

    });
});
