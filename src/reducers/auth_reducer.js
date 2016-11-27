
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_TALES} from '../actions/types';

export default function(state={}, action) {
	switch(action.type) {
		case AUTH_USER: 
			return {...state, authenticated: true};
		case UNAUTH_USER: 
			return {...state, authenticated: false};
		case AUTH_ERROR: 
			return {...state, error: action.payload};
		case FETCH_TALES: 
			//console.log(action.payload);
			return {...state, tales: action.payload}		
	}
	return state;
}