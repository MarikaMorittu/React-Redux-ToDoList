import { usersArray } from "../../pages/loginCard/LoginCard"
import { signinAction } from "./signinAction"
import { StateSignIn } from "./signinTypes"

// create initial state
export const initialState = {
    name: '',
    surname: '',
    email: '',
    password: '',
    isButtonDisabled: true,
    helperText: '',
    isError: false,
    // newUsersArray: usersArray
}


export const signinReducer = (state = initialState, action: signinAction): StateSignIn => {
    switch(action.type){
        case 'SET_NAME':
            return{
                ...state,
                name: action.payload
            }
        case 'SET_SURNAME':
            return{
                ...state,
                surname: action.payload
            }
        case 'SET_EMAIL':
            return{
                ...state,
                email: action.payload
            }
        case 'SET_PASSWORD':
            return{
                ...state,
                password: action.payload
            }
        case 'SET_IS_BUTTON_DISABLED':
            return{
                ...state,
                isButtonDisabled: action.payload
            }
        case 'SET_SIGN_IN_SUCCESS':
            return{
                ...state,
                helperText: action.payload,
                isError: false
            }
        case 'SET_SIGN_IN_FAILED':
            return{
                ...state,
                helperText: action.payload,
                isError: true
            }
        case 'SET_IS_ERROR':
            return{
                ...state,
                isError: action.payload
            }
        // case 'SET_NEW_USER':
        //     return{
        //         ...state,
        //         newUsersArray: [...state.newUsersArray, action.payload]
        //     }
        default: return state
    }
}