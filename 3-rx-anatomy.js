var Rx = require('rxjs/Rx');

// Creation method `from`
// Example input: `[ 'Sarah Johanson', 'Saleem Ada' ]`
exports.convertToObservable$ = function convertToObservable$(userArray) {
	return Rx.Observable.from(userArray);
};

// Sequence of instance methods `map` and `reduce`
exports.transformer$ = function transformer$(userObj$) {
	return userObj$.map(function (name) {
			var nameArr = name.split(' ');
			return {
				firstName: nameArr[0],
				lastName: nameArr[1]
			}
		})
		.map(function (user) {
			var userKey = user.firstName.toLowerCase() + user.lastName;
			return Object.assign(user, { userKey: userKey });
		})
		.reduce(function (previous, next) {
			previous[next.userKey] = next;
			return previous;
		}, {});
};