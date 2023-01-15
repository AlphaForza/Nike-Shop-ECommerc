import login from '../component/Login/Login';

class Auth {
	static Register = (dataInput) => {
		if (localStorage.hasOwnProperty('usersDB')) {
			//ovde pravim Array od mojih usera, kako bi mogo da manipulisem
			// sa novim tj da dodam
			let usersDB = JSON.parse(localStorage.getItem('usersDB'));

			//ovde proveravam user-a po Emial-u dal' postoji
			let existUser = usersDB.some((el) => {
				return el.email === dataInput.email;
			});

			if (existUser) {
				console.log('User postoji!');
				return false;
			} else {
				usersDB.push(dataInput);
				localStorage.setItem('usersDB', JSON.stringify(usersDB));
				return true;
			}
		} else {
			let newUser = [dataInput];
			localStorage.setItem('usersDB', JSON.stringify(newUser));
			return true;
		}
	};

	static Login = (dataInput) => {
		if (localStorage.hasOwnProperty('usersDB')) {
			let userDB = JSON.parse(localStorage.getItem('usersDB'));
			let existUser = userDB.find((el) => {
				return (
					el.email === dataInput.email &&
					el.password === dataInput.password
				);
			});
			//FIXME: ovde da pogledam kad nema 'existUser.email' zasto baca
			// gresku u konzoli!
			if (existUser.email) {
				return existUser;
			}
		}
		return false;
	};
}

export default Auth;
