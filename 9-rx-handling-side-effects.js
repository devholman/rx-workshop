var Rx = require('rxjs/Rx');

/**
 * Inputs will be a array with numbers or strings as well as
 * 3 functions that will be related to side-effects that you
 * don't want to have an effect on your sequence.
 */
exports.logging$ = function logging$(mixedArray, nextLog, errLog, completeLog) {
	return Rx.Observable.from(mixedArray)
		.map(function (num) {
			if (typeof num !== 'number') {
				throw new Error('You have a string in the array!');
			}
			return num * 2;
		})
		.do(
			nextLog,
			errLog,
			completeLog
		);
};