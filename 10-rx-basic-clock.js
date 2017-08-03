var Rx = require('rx');

Rx.Observable.interval(1000)
	.map(function () {
		var date = new Date();
		return date.toLocaleTimeString('en-US', { timeZone: 'America/Chicago' });
	})
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