import { OPEN_DRAWER } from '../constants'

export const openDrawer = (payload) => {
	const action = {
		type : OPEN_DRAWER,
		payload
	}
	return action;
}