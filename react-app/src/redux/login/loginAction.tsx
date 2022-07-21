export type loginActions = { type: 'SET_IS_BUTTON_DISABLED', payload: boolean }
  | { type: 'LOGIN_SUCCESS', payload: string }
  | { type: 'LOGIN_FAILED', payload: string }
  | { type: 'SET_IS_ERROR', payload: boolean };