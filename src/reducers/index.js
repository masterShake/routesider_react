import { OPEN_DRAWER } from '../constants'

// store/global state
const initial_state = {
	drawerOpen: false
};

// calculate the next state and return a new object
const rootReducer = (state = initial_state, action) => {
	switch(action.type){
		case OPEN_DRAWER:
			return {drawerOpen: true};
		default:
			return state;
	}
}

export default rootReducer;