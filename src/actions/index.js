import axios from 'axios';
import {browserHistory} from 'react-router';
import {AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_TALES, FETCH_TALE} from './types';

//const ROOT_URL = 'http://pacific-fjord-58728.herokuapp.com';
const ROOT_URL = 'http://fishtailsapp.herokuapp.com';

export function signupUser({username, email, password}){
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signup`, {username, email, password})
			.then(response => {
				dispatch({type: AUTH_USER, payload: username});
				browserHistory.push('/gallery');
			})
			.catch(error => dispatch(authError(error.response.data.error)));
	}
};

export function signinUser({username, password}){
	console.log('signinUser()', username, password)
	return function(dispatch){
		axios.post(`${ROOT_URL}/signin`, {username, password})
			.then(response => {
				dispatch({type: AUTH_USER, payload: username});
				browserHistory.push('/gallery');
			})
			.catch(error => console.log(error.response.data.error));
	}
};

export function addTale({title, story, picture}, author) {
	console.log('addTale():', title, story, picture, author)
	return function(dispatch) {
		axios.post(`${ROOT_URL}/tales`, {author, title, story, picture})
			.then(response => {
				browserHistory.push('/gallery');
			})
			.catch(error => console.log(error.response.data.error));
	}
};

// An example using Redux-Promise. 
export function fetchTales(){
	const response =	axios.get(`${ROOT_URL}/tales`);
	
	return {type: FETCH_TALES, payload: response};
};

export function fetchTale(id){
	console.log('fetchTale()',id )
	return function(dispatch){
		axios.get(`${ROOT_URL}/tales/${id}`).then(function(response) {
			console.log('the tale/:id response',response)
			dispatch({
				type: FETCH_TALE,
				payload: response.data
			});		
		})
	}
};



