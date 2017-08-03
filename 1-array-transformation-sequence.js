var names = [ 'Sarah Smith', 'Adam Scott', 'Eve Livingston'];

var usersObj = names.map(function (name) {
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

console.log(usersObj);