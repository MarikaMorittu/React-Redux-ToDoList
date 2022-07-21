import React, { useEffect, useReducer, useState } from 'react'
import styles from '../signinCard/signinCard.module.css'
import { usersArray} from '../loginCard/LoginCard'
import { initialState, signinReducer } from '../../redux/signin/signinReducer'
import { StateSignIn } from '../../redux/signin/signinTypes'
import { store } from '../../redux/store'





const SignInCard = () => {

    const [state, dispatch] = useReducer (signinReducer, initialState)

    useEffect(() => {
        if(state.name.trim() && state.surname.trim() && state.email.trim() && state.password.trim()){
            dispatch({
                type: 'SET_IS_BUTTON_DISABLED',
                payload: false
            })}
        else{
            dispatch({
                type: 'SET_IS_BUTTON_DISABLED',
                payload: true
            })
        }
    }, [state.name, state.surname, state.email, state.password])

    const validEmail = (email:string) =>{
        return /\S+@\S+\.\S+/.test(email);
    }
    const validPassword = (password:string) => {
        return password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=\(\)\^?&])[A-Za-z\d$@$!%* #+=\(\)\^?&]{8,}$/)
        };




    const handleSignIn = () => {
        let users = usersArray.find((element)=>element.email !== state.email && element.password !== state.password)
        if(users){
            dispatch({
                type: 'SET_SIGN_IN_FAILED',
                payload: 'User Registrated'
            })
            console.log(store.dispatch)
        }else{
            dispatch({
                type: 'SET_SIGN_IN_SUCCESS',
                payload: 'User not Registrated'
            })
            console.log('Non puoi registrarti')
        }
    }




    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            state.isButtonDisabled || handleSignIn();
        }
    };
    

    const handleNameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
        dispatch({
            type: 'SET_NAME',
            payload: event.target.value
        });
    };

    const handleSurnameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
        dispatch({
            type: 'SET_SURNAME',
            payload: event.target.value
        });
    };

    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
        if(!validEmail(event.target.value)){
            console.log('error')
        }else{
            dispatch({
                type: 'SET_EMAIL',
                payload: event.target.value
            })
            console.log('email OK')
        }
            
    };




    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
        if(!validPassword(event.target.value)){
            console.log('password NO')
        }else{
            dispatch({
                type: 'SET_PASSWORD',
                payload: event.target.value
            }) 
            console.log('password OK')
        }
        }




    return (
        <div>
            <h2>SignIn with your credentials: </h2>
            <div className={styles.SignIncardContainer}>
                <input type='name' placeholder="name here..." className={styles.nameInput} onChange={handleNameChange} onKeyPress={handleKeyPress}/>
                <input type='surname' placeholder="surname here..." className={styles.surnameInput} onChange={handleSurnameChange} onKeyPress={handleKeyPress}/>
                <input type='email' placeholder="email here..." className={styles.emailInput} onChange={handleEmailChange} onKeyPress={handleKeyPress}/>
                <input type='password' placeholder="password here..." required minLength={8} title="" className={styles.passInput} onChange={handlePasswordChange} onKeyPress={handleKeyPress}/>
                {/* <p className= 'displayErrorMessage'> Password must contain at least one number, one uppercase and lowercase letter and  at least 8 characters</p> */}
                <div className={styles.btnContainer}>
                    <button onClick={handleSignIn} disabled={state.isButtonDisabled}>Register Now</button>
                </div>
            </div>
        </div>
    )
}




export default SignInCard