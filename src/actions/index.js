import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_TALES} from './types';

const ROOT_URL = 'http://pacific-fjord-58728.herokuapp.com'; 

export function signupUser({username, email, password}){
	console.log('signupUser(): ',username, email, password)
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signup`, {username, email, password})
			.then(response => {
				dispatch({type: AUTH_USER});
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/gallery');
			})
			.catch(error => dispatch(authError(error.response.data.error)));
	}
}