import { combineReducers } from "redux";
import { loginReducer } from "./login/loginReducer";
import { signinReducer } from "./signin/signinReducer";
import { userReducer } from "./users/usersReducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    signin: signinReducer,
    users: userReducer
})
