var Rx = require('rxjs/Rx');

// Input will be a plain number and a string number
exports.timesTwo$ = function timesTwo$(number) {
	return Rx.Observable.create(function (observer) {
		if (typeof number !== 'number') {
			observer.error('Argument `number` is not a number!');
		} else {
			observer.next(number * 2);
		}
		observer.complete();
	});
};