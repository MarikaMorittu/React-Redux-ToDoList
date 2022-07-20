import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import { signinReducer } from "./signin/signinReducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    signin: signinReducer
})
