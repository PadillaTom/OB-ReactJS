import { combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { todosReducer } from "./todosReducer";

// Will ADD states to the STORE:
export const rootReducer = combineReducers({
	// State NAME: reducer that will handle it.
	todosState: todosReducer,
	filterState: filterReducer,
});
