var test = require('tape');
var user = require('../2-rx-transformation-sequence');

test('Rx.js "Observable" test: conversion of array of names into object of users', function cb(t) {
	var expectedValue = {
			sarahJohanson: { firstName: 'Sarah', lastName: 'Johanson', userKey: 'sarahJohanson' },
			saleemAda: { firstName: 'Saleem', lastName: 'Ada', userKey: 'saleemAda' }
		},
		returnedObservable$ = user.convertToObj$([ 'Sarah Johanson', 'Saleem Ada' ]);

	t.equal(
		!!returnedObservable$.subscribe,
		true,
		'Returned value from `convertToObj$` should be an Observable with a subscribe property.'
	);

	returnedObservable$.subscribe(
		function next(returnedValue) {
			t.equal(
				typeof returnedValue,
				'object',
				'Returned value should be an object.'
			);
			t.equal(
				!!returnedValue.sarahJohanson,
				true,
				'Each prop on the returned obj needs to be a camelCased concatenation of first and last name.'
			);
			t.equal(
				returnedValue.sarahJohanson,
				returnedValue.sarahJohanson,
				'User prop\'s value should be an object containing the following props: `firstName`, `lastName` and `userKey`.'
			);
			t.deepEqual(
				returnedValue,
				expectedValue,
				'Check full object for accuracy.'
			);
		},
		function error(err) {
			console.log('Error: ' + err);
		},
		function completed() {
			t.end();
		}
	);
});