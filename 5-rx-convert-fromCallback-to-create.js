var Rx = require('rx');

var func = function (callback) {
	callback([ 1, 2, 3]);
};

Rx.Observable.fromCallback(func)()
	.subscribe(function onNext(data) {
		console.log(data); // Why is the output a one single array?
	});

Rx.Observable.create(function (observer) {
		func(function (data) {
			data.forEach(function (num) {
				observer.onNext(num);
			})
		});
		observer.onCompleted();
	})
	.subscribe(function onNext(data) {
		console.log(data); // Is this what you wanted?
	});