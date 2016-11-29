
import {FETCH_TALES, FETCH_TALE} from '../actions/types';

const INIT_STATE = {tales:[], currentTale: []};

export default function(state={}, action) {
	switch(action.type) {
		case FETCH_TALES: 
			return {...state, tales: action.payload.data};
		case FETCH_TALE:
			console.log('the tale payload', action.payload)
			return {...state, currentTale: action.payload}
	}
	return state
};