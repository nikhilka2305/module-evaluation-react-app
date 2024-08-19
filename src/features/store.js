import { configureStore } from "@reduxjs/toolkit";
import contactManageReducer from "./contactManagement/contactManageSlice";
const LOCAL_STORAGE = "contacts";
const getContacts = () => {
	if (localStorage.getItem(LOCAL_STORAGE) !== null) {
		const getItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
		console.log(getItem);
		return getItem;
	}
};

const addContactsMiddleware = ({ getState }) => {
	return (next) => (action) => {
		const result = next(action);
		localStorage.setItem(LOCAL_STORAGE, JSON.stringify(getState()));
		return result;
	};
};

export default configureStore({
	reducer: {
		contacts: contactManageReducer,
	},
	preloadedState: getContacts(),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(addContactsMiddleware),
});
