import React, { useEffect, useReducer } from 'react'
import styles from '../signinCard/signinCard.module.css'
import { usersArray } from '../loginCard/LoginCard'
import { initialState, signinReducer } from '../../redux/signin/signinReducer'




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

    const handleSignIn = () => {
        if(state.email == 'prova', state.password == 'prova'){
            dispatch({
                type: 'SET_SIGN_IN_SUCCESS',
                payload: 'User Registrated'
            })
            console.log('OK')
        }else{
            dispatch({
                type: 'SET_SIGN_IN_FAILED',
                payload: 'User not Registrated'
            })
            console.log('NO')
        }
    }


    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key == 'Enter') {
            state.isButtonDisabled || handleSignIn();
        }
    };
    




    return (
        <div>
            <h2>SignIn with your credentials: </h2>
            <div className={styles.SignIncardContainer}>
                <input type='name' placeholder="name here..." className={styles.nameInput} />
                <input type='surname' placeholder="surname here..." className={styles.surnameInput} />
                <input type='email' placeholder="email here..." className={styles.firstInput} />
                <input type='password' placeholder="password here..." className={styles.firstInput} />
                <div className={styles.btnContainer}>
                    <button>Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default SignInCard