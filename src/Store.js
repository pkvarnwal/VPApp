import { createStore, combineReducers } from "redux";

import LoginReducer from './presentation/login/LoginReducer'

let rootReducer = combineReducers({
   loginReducer: LoginReducer
});

const store = createStore(rootReducer);

export default store;