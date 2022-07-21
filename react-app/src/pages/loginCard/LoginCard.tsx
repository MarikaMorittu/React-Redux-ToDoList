import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { intialState, loginReducer } from "../../redux/login/loginReducer";
import { UserType } from "../../redux/users/usersTypes";
import styles from '../loginCard/loginCard.module.css'



function LoginCard() {

  const [state, dispatch] = useReducer(loginReducer, intialState);
  const {users} = useSelector((state: any)=>state.users)
  const [user, setUser] = useState({email: '', password: '' })
  
  
  useEffect(() => {
    if (user.email.trim() && user.password.trim()) {
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
  }, [user.email, user.password]);

  const handleLogin = () => {
    console.log(users)
    let userFound = users.find((element:UserType)=> element.email !== user.email && element.password !== user.password)
    if(userFound){
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: 'Login Successfully'
      });
      console.log('OK')
    } else {
      dispatch({
        type: 'LOGIN_FAILED',
        payload: 'Incorrect username or password'
      });
      console.log('NO')
    }
    
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key == 'Enter') {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      setUser({
        ...user,
        email: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      setUser({
        ...user,
        password: event.target.value
      });
    }

    

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

