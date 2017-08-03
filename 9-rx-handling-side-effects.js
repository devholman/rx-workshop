var Rx = require('rx');

Rx.Observable.from([1, '2', 3])
	.map(function (num) {
		if (typeof num !== 'number') {
			throw new Error('You have a string in the array!');
		}
		return num * 2;
	})
	.do(
		function (data) {
			console.log(data);
		},
		function (err) {
			console.log(err);
		},
		function () {
			console.log('Completed!');
		}
	)
	.subscribe(
		function (data) {
			console.log(data);
		},
		function (err) {
			console.log(err);
		},
		function () {
			console.log('Completed!');
		}
	);