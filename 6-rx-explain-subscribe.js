var Rx = require('rx');

var timesTwo = function (number, callback) {
	var newNumber;
	if (typeof number !== 'number') {
		callback('Argument `number` is not a number!');
	} else {
		newNumber = number * 2;
	}
	callback(null, newNumber);
};

Rx.Observable.fromNodeCallback(timesTwo)('2')
	.subscribe(
		function onNext(data) {
			console.log(data);
		},
		function onError(err) {
			console.log(err);
		},
		function onComplete() {
			console.log('I am done!');
		}
	);