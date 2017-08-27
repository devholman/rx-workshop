var Rx = require('rxjs/Rx');

// Example input: `[ 'Sarah Johanson', 'Saleem Ada' ]`
exports.convertToObjWithCreate$ = function convertToObj$(userArray) {
	return Rx.Observable.create(
			function (observer) {
				userArray.forEach(function (user) {
					observer.next(user);
				});
				observer.complete();
			}
		)
		.map(function (name) {
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