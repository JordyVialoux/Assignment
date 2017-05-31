import { combineReducers } from "redux";

import photos from "./photosReducer";
import users from "./userReducer";

export default combineReducers({
	photos,
	users
})

