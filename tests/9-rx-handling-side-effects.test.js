var test = require('tape');
var sideEffects = require('../9-rx-handling-side-effects');

test('Rx.js "Observable" test: conversion of array of names into object of users', function cb(t) {
	var numberArray = [1, 2, 3],
		returnedNumbers = [];

	function nextLog(number) {
		returnedNumbers.push(number);
	}
	function errLog(err) {
		t.true(false, 'There should be no errors here.');
	}
	function completeLog() {
		t.deepEqual(returnedNumbers, numberArray, 'All numbers should have been logged.');
	}

	sideEffects$ = sideEffects.logging$(numberArray);

	sideEffects$.subscribe(
		function next(numberArray) {},
		function error(err) {},
		function completed() {
			t.end();
		}
	);
});