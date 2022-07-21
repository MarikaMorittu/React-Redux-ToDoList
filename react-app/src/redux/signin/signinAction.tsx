export type signinAction = 
| {type: 'SET_IS_BUTTON_DISABLED', payload: boolean}
| {type: 'SET_SIGN_IN_SUCCESS', payload: string}
| {type: 'SET_SIGN_IN_FAILED', payload: string}
| {type: 'SET_IS_ERROR', payload: boolean}
| {type: 'SET_NEW_USER', payload: string}