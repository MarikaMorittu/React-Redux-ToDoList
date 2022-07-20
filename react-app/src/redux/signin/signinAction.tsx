export type signinAction = {type: 'SET_NAME',payload: string}
| {type: 'SET_SURNAME', payload: string}
| {type: 'SET_EMAIL', payload: string}
| {type: 'SET_PASSWORD', payload: string}
| {type: 'SET_IS_BUTTON_DISABLED', payload: boolean}
| {type: 'SET_SIGN_IN_SUCCESS', payload: string}
| {type: 'SET_SIGN_IN_FAILED', payload: string}
| {type: 'SET_IS_ERROR', payload: boolean}