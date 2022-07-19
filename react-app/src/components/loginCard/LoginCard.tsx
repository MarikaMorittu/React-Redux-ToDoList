import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useReducer, useState } from "react";
import { intialState, loginReducer } from "../../redux/loginReducer";
import styles from '../loginCard/loginCard.module.css'




function LoginCard() {

  const [state, dispatch] = useReducer(loginReducer, intialState);

  // 
  useEffect(() => {
    if (state.email.trim() && state.password.trim()) {
     dispatch({
       type: 'SET_IS_BUTTON_DISABLED',
       payload: false
     });
    } else {
      dispatch({
        type: 'SET_IS_BUTTON_DISABLED',
        payload: true
      });
    }
  }, [state.email, state.password]);

  const handleLogin = () => {
    if (state.email === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'LOGIN_FAILED',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'SET_EMAIL',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'SET_PASSWORD',
        payload: event.target.value
      });
    }

    // 

  return <div className={styles.mainContainer}>
    <h2>Login with your credentials: </h2>
    <div className={styles.cardContainer}>
      <input type='email' placeholder="email here..." className={styles.firstInput} onChange={handleUsernameChange} onKeyPress={handleKeyPress}/>
      <input type='password' placeholder="password here..." className={styles.firstInput} onChange={handlePasswordChange} onKeyPress={handleKeyPress} />
      <div className={styles.btnContainer}>
        <button onClick={handleLogin} disabled={state.isButtonDisabled}>Submit</button>
        <button>Register Now</button>
      </div>
    </div>
  </div>;
}


export default LoginCard;

