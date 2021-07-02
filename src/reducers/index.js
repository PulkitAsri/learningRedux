//In a store we have to send only one reducer 
//So we combine all the reducers into one HERE

import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers=combineReducers({
    counter:counterReducer,
    isLogged:loggedReducer
})

export default allReducers;