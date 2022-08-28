// DETAILS
export enum DetailsTypes {
	SET_FIRST_NAME = 'SET_FIRST_NAME',
	SET_LAST_NAME = 'SET_LAST_NAME',
	SET_EMAIL = 'SET_EMAIL'
}
interface SetFirstNameAction {
	type: DetailsTypes.SET_FIRST_NAME;
	payload: string;
}
interface SetLastNameAction {
	type: DetailsTypes.SET_LAST_NAME;
	payload: string;
}
interface SetEmailAction {
	type: DetailsTypes.SET_EMAIL;
	payload: string;
}

export type ProfileActions = SetFirstNameAction | SetLastNameAction | SetEmailAction;

