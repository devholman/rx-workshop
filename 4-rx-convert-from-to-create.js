var Rx = require('rx');

var arr = [ '1', '2', '3'];

Rx.Observable.from(arr)
	.subscribe(function onNext(data) {
		console.log(data);
	});

Rx.Observable.create(function (observer) {
		arr.forEach(function (num) {
			observer.onNext(num);
		})
		observer.onCompleted();
	})
	.subscribe(function onNext(data) {
		console.log(data);
	});