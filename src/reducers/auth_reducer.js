
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_TALES} from '../actions/types';

const INITIAL_STATE = {authenticated: false, error:'', tales: []}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case AUTH_USER: 
			return {...state, authenticated: true};
		case UNAUTH_USER: 
			return {...state, authenticated: false};
		case AUTH_ERROR: 
			return {...state, error: action.payload};
		case FETCH_TALES: 
			console.log('fetchtales payload: ', action.payload);
			return {...state, tales: action.payload}		
	}
	return state;
}