import { MY_CONSTANT } from '../constants'

// store/global state
const initial_state = {
	someDataPoints : []
};

// calculate the next state and return a new object
const rootReducer = (state = initial_state, action) => {
	switch(action.type){
		case MY_CONSTANT:
			return {
				...state,
				someDataPoints : [...state.someDataPoints, action.payload]
			};
		default:
			return state;
	}
}

export default rootReducer;