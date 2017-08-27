var test = require('tape');
var user = require('../5-rx-convert-bindCallback-to-create');

test('Rx.js "Observable" test: conversion of array of names into object of users', function cb(t) {
	var expectedValue = {
			sarahJohanson: { firstName: 'Sarah', lastName: 'Johanson', userKey: 'sarahJohanson' },
			saleemAda: { firstName: 'Saleem', lastName: 'Ada', userKey: 'saleemAda' }
		},
		returnedObservable$;

	function getUsers(callback) {
		callback([ 'Sarah Johanson', 'Saleem Ada' ]);
	}
	returnedObservable$ = user.convertToObjWithBindCb$(getUsers);

	t.equal(
		!!returnedObservable$.subscribe,
		true,
		'Returned value from `convertToObj$` should be an Observable with a subscribe property.'
	);

	returnedObservable$.subscribe(
		function next(returnedValue) {
			// This will not be called as expected.
		},
		function error(err) {
			t.true(err, 'Notice how `err` is true, and we ended up in the error path.');
			t.comment('ERROR MESSAGE: "' + err + '!" ' +
				'This happened because bindCallback, and it\'s variants, have a single return, ' +
				'and that single return is from the arguments passed in the callback. In other words, ' +
				'there\'s a single event, and that event is the execution of the callback. Here, the ' +
				'return is the array itself, and not the indexes within the error, preventing our ' +
				'ability to iterate on the data, causing the error on `split`.');
			t.end();
		},
		function completed() {
			// This too will not be called.
		}
	);
});