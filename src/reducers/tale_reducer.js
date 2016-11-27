
import {FETCH_TALES} from '../actions/types';

export default function(state=[], action) {
	switch(action.type) {
		case FETCH_TALES: 
		console.log('setting the state', action.payload.data)
			return [...state, action.payload.data]
	}
	return state
};