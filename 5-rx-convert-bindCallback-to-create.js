var Rx = require('rxjs/Rx');

/** Input is a function with a callback completion method:
 * function getUsers(callback) {
 * 	callback([ 'Sarah Johanson', 'Saleem Ada' ]);
 * }
 */
exports.convertToObjWithBindCb$ = function convertToObjWithBindCb$(getUsers) {
	return Rx.Observable.bindCallback(getUsers)()
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