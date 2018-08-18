import { MY_CONSTANT } from './constants'

export const MY_CONSTANT = (payload) => {
	const action = {
		type : MY_CONSTANT,
		payload
	}
	return action;
}