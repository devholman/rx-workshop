var test = require('tape');
var asyncExamples = require('../7-rx-async-instance-methods');

test('Rx.js "Observable" test: conversion of array of names into object of users', function cb(t) {
	var timesArray = [ 1000, 500, 250, 100 ],
		returnedFlatTimes = [],
		returnedConcatTimes = [],
		flatMapExample$,
		concatMapExample$;

	var timeoutFunction = function (time, callback) {
		setTimeout(function () {
			callback(time);
		}, time);
	};

	flatMapExample$ = asyncExamples.flatMapExample$(timesArray, timeoutFunction);
	concatMapExample$ = asyncExamples.concatMapExample$(timesArray, timeoutFunction);

	flatMapExample$.subscribe(
		function next(returnedValue) {
			returnedFlatTimes.push(returnedValue);
		},
		function error(err) {
			t.comment('ERROR MESSAGE: ' + err);
		},
		function completed() {
			var expectedTimes = [ 100, 250, 500, 1000 ];
			t.deepEqual(returnedFlatTimes, expectedTimes, 'Returned times should be shortest to longest.');
		}
	);
	concatMapExample$.subscribe(
		function next(returnedValue) {
			returnedConcatTimes.push(returnedValue);
		},
		function error(err) {
			t.comment('ERROR MESSAGE: ' + err);
		},
		function completed() {
			t.deepEqual(returnedConcatTimes, timesArray, 'Returned times should be in the order of the original array.');
			t.end();
		}
	);
});