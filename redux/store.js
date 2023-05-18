import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./reducers/houseReducer";

const store = configureStore({
	reducer: {
		house: houseReducer,
	},
});

export default store;
