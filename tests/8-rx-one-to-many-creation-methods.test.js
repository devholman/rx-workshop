var test = require('tape');
var oneToManyCreation = require('../8-rx-one-to-many-creation-methods');

test('Rx.js "Observable" test: conversion of array of names into object of users', function cb(t) {
	var returnedMergeTimes = [],
		returnedConcatTimes = [],
		mergeExample$,
		concatExample$,
		forkJoinExample$;

	var timeoutFunction = function (time, callback) {
		setTimeout(function () {
			callback(time);
		}, time);
	};

	mergeExample$ = oneToManyCreation.mergeExample$(1000, 500, timeoutFunction);
	concatExample$ = oneToManyCreation.concatExample$(1000, 500, timeoutFunction);
	forkJoinExample$ = oneToManyCreation.forkJoinExample$(1000, 500, timeoutFunction);

	mergeExample$.subscribe(
		function next(returnedValue) {
			returnedMergeTimes.push(returnedValue);
		},
		function error(err) {
			t.comment('ERROR MESSAGE: ' + err);
		},
		function completed() {
			var expectedTimes = [ 500, 1000 ];
			t.deepEqual(returnedMergeTimes, expectedTimes, 'Returned times should be shortest to longest.');
		}
	);
	concatExample$.subscribe(
		function next(returnedValue) {
			returnedConcatTimes.push(returnedValue);
		},
		function error(err) {
			t.comment('ERROR MESSAGE: ' + err);
		},
		function completed() {
			var expectedTimes = [ 1000, 500 ];
			t.deepEqual(returnedConcatTimes, expectedTimes, 'Returned times should be in the order of the original array.');
		}
	);
	forkJoinExample$.subscribe(
		function next(returnedValue) {
			t.deepEqual(
				returnedValue,
				[ 1000, 500 ],
				'`forkJoin` returns a single value, which is an array with all the returned values in the order called'
			);
		},
		function error(err) {
			t.comment('ERROR MESSAGE: ' + err);
		},
		function completed() {
			t.end();
		}
	);
});