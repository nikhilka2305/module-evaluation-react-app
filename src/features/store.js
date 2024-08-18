import { configureStore } from "@reduxjs/toolkit";
import contactManageReducer from "./contactManagement/contactManageSlice";

export default configureStore({
	reducer: {
		contacts: contactManageReducer,
	},
});
