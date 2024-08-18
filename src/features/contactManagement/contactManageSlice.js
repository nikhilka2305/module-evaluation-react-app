import { createSlice } from "@reduxjs/toolkit";

export const contactManagerSlice = createSlice({
	name: "contacts",
	initialState: {
		contactList: [],
	},
	reducers: {
		addContact: (state, action) => {
			state.contactList.push(action.payload);
		},
		deleteContact: (state, action) => {
			state.contactList = state.contactList.filter((contact) => {
				return contact.id !== action.payload;
			});
		},
	},
});

export const { addContact, deleteContact } = contactManagerSlice.actions;
export default contactManagerSlice.reducer;
