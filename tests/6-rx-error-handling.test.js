var test = require('tape');
var multiplier = require('../6-rx-error-handling');

test('Rx.js "Observable" test: conversion of array of names into object of users', function cb(t) {
	var error$ = multiplier.timesTwo$('2'),
		success$ = multiplier.timesTwo$(2);

	error$.subscribe(
		function next(returnedValue) {
			t.true(false, 'This error test should not succeed.');
		},
		function error(err) {
			t.true(err, '`err` should be true for the negative test.');
		},
		function completed() {
			t.true(false, 'The completed function does not fire with an error.');
		}
	);
	success$.subscribe(
		function next(number) {
			t.equal(number, 4, '2 times 2 should be 4.');
		},
		function error(err) {
			t.true(false, '`err` should be false for the positive test.');
		},
		function completed() {
			t.true(true, 'The completed function should fire with a success.');
			t.end();
		}
	);
});