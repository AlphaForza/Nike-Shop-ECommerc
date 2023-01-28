import React, { useState } from 'react';
import { toggleModal } from '../../store/sliceModal';
import Modal from '../Modal/Modal';
import { useDispatch } from 'react-redux';

import Auth from '../../services/Auth';
import { login } from '../../store/sliceUser';

// css
import './login.scss';

function Login() {
	const dispatch = useDispatch();

	const [inputData, setInputData] = useState({});

	const inputHandler = (e) => {
		let copyInput = { ...inputData };
		copyInput[e.target.name] = e.target.value;
		setInputData(copyInput);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		let logedUser = Auth.Login(inputData);

		if (logedUser) {
			console.log('user postoji');
			dispatch(login(logedUser));
			dispatch(toggleModal({ login: false }));
		} else {
			console.log('ne postoji');
		}

		// let currentUser = localStorage.getItem('logedUser');
		// console.log(JSON.parse(currentUser));
	};

	return (
		<Modal className='login'>
			<form className='form-register' onSubmit={submitHandler}>
				<input
					type='email'
					placeholder='Email'
					name='email'
					onInput={inputHandler}
				/>
				<input
					type='password'
					placeholder='Password'
					name='password'
					onInput={inputHandler}
				/>
				<div className='buttonSection'>
					<button type='submit'>Login</button>
					<button
						type='button'
						onClick={() => dispatch(toggleModal({ login: false }))}>
						Cancel
					</button>
				</div>
			</form>
		</Modal>
	);
}

export default Login;
