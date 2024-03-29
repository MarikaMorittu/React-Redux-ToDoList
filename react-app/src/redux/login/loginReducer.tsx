import { loginActions } from "./loginAction";
import { StateLogIn } from "./loginTypes";


// create intial state
export const intialState = {
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

export const loginReducer = (state = intialState, action: loginActions): StateLogIn => {
  switch(action.type){
    case 'SET_IS_BUTTON_DISABLED':
      return{
        ...state,
        isButtonDisabled:action.payload
      }
    case 'LOGIN_SUCCESS':
      return{
        ...state,
        helperText:action.payload,
        isError: false
      }
    case 'LOGIN_FAILED':
      return{
        ...state,
        helperText:action.payload,
        isError:true
      }
    case 'SET_IS_ERROR':
      return{
        ...state,
        isError:action.payload
      }
    default: return state
  }
};
