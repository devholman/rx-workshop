var test = require('tape');
var user = require('../1-array-transformation-sequence');

test('Array method test: conversion of array of names into object of users', function cb(t) {
	var expectedValue = {
			sarahJohanson: { firstName: 'Sarah', lastName: 'Johanson', userKey: 'sarahJohanson' },
			saleemAda: { firstName: 'Saleem', lastName: 'Ada', userKey: 'saleemAda' }
		},
		returnedValue = user.convertToObj([ 'Sarah Johanson', 'Saleem Ada' ]);

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
	t.end();
});