var Rx = require('rx');

var func = function (time, callback) {
	setTimeout(function () {
		callback(time);
	}, time);
};

Rx.Observable.from([1000, 500, 250, 100])
	.flatMap(function (time) {
		return Rx.Observable.fromCallback(func)(time);
	})
	.subscribe(function onNext(data) {
		console.log(data);
	});

Rx.Observable.from([1000, 500, 250, 100])
	.concatMap(function (time) {
		return Rx.Observable.fromCallback(func)(time);
	})
	.subscribe(function onNext(data) {
		console.log(data);
	});