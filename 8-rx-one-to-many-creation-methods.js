var Rx = require('rx');

var func = function (time, callback) {
	setTimeout(function () {
		callback(time);
	}, time);
};

Rx.Observable.merge(
		Rx.Observable.fromCallback(func)(1000),
		Rx.Observable.fromCallback(func)(500)
	)
	.subscribe(function onNext(data) {
		console.log(data);
	});

Rx.Observable.concat(
		Rx.Observable.fromCallback(func)(1000),
		Rx.Observable.fromCallback(func)(500)
	)
	.subscribe(function onNext(data) {
		console.log(data);
	});

Rx.Observable.forkJoin(
		Rx.Observable.fromCallback(func)(1000),
		Rx.Observable.fromCallback(func)(500)
	)
	.subscribe(function onNext(data) {
		console.log(data);
	});