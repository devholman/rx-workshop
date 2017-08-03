var Rx = require('rx');

// Source
var names = [ 'Sarah Smith', 'Adam Scott', 'Eve Livingston'];

// Creation method `from`
var usersObj$ = Rx.Observable.from(names);

// Sequence of instance methods `map` and `reduce`
usersObj$.map(function (name) {
		var nameArr = name.split(' ');
		return {
			firstName: nameArr[0],
			lastName: nameArr[1]
		}
	})
	.map(function (user) {
		var userKey = user.firstName.toLowerCase() + user.lastName;
		return Object.assign(user, { key: userKey });
	})
	.reduce(function (previous, next) {
		previous[next.key] = next;
		return previous;
	}, {});

// Subscription (execution) method
usersObj$.subscribe(
	function onNext(data) {
		console.log(data);
	}
)