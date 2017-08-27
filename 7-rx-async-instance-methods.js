var Rx = require('rxjs/Rx');

/**
 * Input will be an array of plain numbers, and a timeoutFunction like the below
 * var timeoutFunction = function (time, callback) {
 * 	setTimeout(function () {
 * 		callback(time);
 * 	}, time);
 * };
 */
exports.flatMapExample$ = function flatMapExample$(timesArray, timeoutFunction) {
	return Rx.Observable.from(timesArray)
		.flatMap(function (time) {
			return Rx.Observable.bindCallback(timeoutFunction)(time);
		});
};

exports.concatMapExample$ = function flatMapExample$(timesArray, timeoutFunction) {
	return Rx.Observable.from(timesArray)
		.concatMap(function (time) {
			return Rx.Observable.bindCallback(timeoutFunction)(time);
		});
};