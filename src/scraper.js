/* jshint node: true */
/* jshint esnext: true */

'use strict';
const Xray = require('x-ray');

let qbStats = new Xray();

// scraping qb stats from espn.com
qbStats('http://espn.go.com/nfl/statistics/player/_/stat/passing/sort/passingYards/year/2015/seasontype/2', '.oddrow, .evenrow',
	[{
		rank: 'td:nth-child(1)',
		name: 'td:nth-child(2) a',
		team: 'td:nth-child(3)',
		comp: 'td:nth-child(4)',
		att: 'td:nth-child(5)',
		pct: 'td:nth-child(6)',
		yds: 'td:nth-child(7)',
		yds_avg: 'td:nth-child(8)',
		long: 'td:nth-child(9)',
		tds: 'td:nth-child(10)',
		ints: 'td:nth-child(11)',
		sack: 'td:nth-child(12)',
		rate: 'td:nth-child(13)',
		yds_gm: 'td:nth-child(14)'
	}]
).write('qb-rank-list.json');
