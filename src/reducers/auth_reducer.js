
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR} from '../actions/types';

const INITIAL_STATE = {}

export default function(state=INITIAL_STATE, action) {
	switch(action.type) {
		case AUTH_USER: 
			return {...state, authenticated: true, user: action.payload};
		case UNAUTH_USER: 
			return {...state, authenticated: false, user: ''};
		case AUTH_ERROR: 
			return {...state, error: action.payload};
	}
	return state;
}