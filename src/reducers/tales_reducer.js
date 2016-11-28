
import {FETCH_TALES} from '../actions/types';

const INIT_STATE = {tales:[], currentTale: []};

export default function(state={}, action) {
	switch(action.type) {
		case FETCH_TALES: 
			return {...state, tales: action.payload.data};
	}
	return state
};