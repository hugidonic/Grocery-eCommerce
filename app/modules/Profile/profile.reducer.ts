import { ProfileActions } from "./profile.actionTypes"
import { ProfileStateType } from "./profile.types"

const initialState: ProfileStateType = {
	UserDetails: null
}

export default (state = initialState, action: ProfileActions) => {
	switch (action.type) {

	default:
		return state
	}
}
