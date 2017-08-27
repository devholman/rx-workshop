var Rx = require('rxjs/Rx');

/**
 * Input will be two plain numbers, and a timeoutFunction like the below
 * var timeoutFunction = function (time, callback) {
 * 	setTimeout(function () {
 * 		callback(time);
 * 	}, time);
 * };
 */
exports.mergeExample$ = function mergeExample$(time1, time2, callbackFunction) {
	return Rx.Observable.merge(
		Rx.Observable.bindCallback(callbackFunction)(time1),
		Rx.Observable.bindCallback(callbackFunction)(time2)
	);
};
exports.concatExample$ = function concatExample$(time1, time2, callbackFunction) {
	return Rx.Observable.concat(
		Rx.Observable.bindCallback(callbackFunction)(time1),
		Rx.Observable.bindCallback(callbackFunction)(time2)
	);
};
exports.forkJoinExample$ = function forkJoinExample$(time1, time2, callbackFunction) {
	return Rx.Observable.forkJoin(
		Rx.Observable.bindCallback(callbackFunction)(time1),
		Rx.Observable.bindCallback(callbackFunction)(time2)
	);
};