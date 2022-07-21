import React, { useEffect, useReducer, useState } from 'react'
import styles from '../signinCard/signinCard.module.css'
import { initialState, signinReducer } from '../../redux/signin/signinReducer'
import { StateSignIn } from '../../redux/signin/signinTypes'
import { store } from '../../redux/store'
import { UserState, UserType } from '../../redux/users/usersTypes'
import { useSelector } from 'react-redux'





const SignInCard = () => {

    const [state, dispatch] = useReducer (signinReducer, initialState)
    const [user, setUser] = useState<UserType>({name: '', surname: '', email: '', password: '' })
    const {users} = useSelector((state: any)=> state.users)
    
    useEffect(() => {
        if(user.name?.trim() && user.surname?.trim() && user.email.trim() && user.password.trim()){
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
    }, [user.name, user.surname, user.email, user.password])

    const validEmail = (email:string) =>{
        return /\S+@\S+\.\S+/.test(email);
    }
    const validPassword = (password:string) => {
        return password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%* #+=\(\)\^?&])[A-Za-z\d$@$!%* #+=\(\)\^?&]{8,}$/)
        };




    const handleSignIn = () => {
        console.log(users)
        let userFound = users.find((element:UserType)=>element.email !== user.email && element.password !== user.password)
        if(userFound){
            dispatch({
                type: 'SET_SIGN_IN_FAILED',
                payload: 'User Registrated'
            })
            console.log('OK')
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
        setUser({
           ...user,
           name: event.target.value
        });
    };

    const handleSurnameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
        setUser({
            ...user,
            surname: event.target.value
        });
    };

    const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
        if(!validEmail(event.target.value)){
            console.log('error')
        }else{
            setUser({
                ...user,
                email: event.target.value
            })
            console.log('email OK')
        }    
    };

    const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
        if(!validPassword(event.target.value)){
            console.log('password NO')
        }else{
            setUser({
                ...user,
                password: event.target.value
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
                <input type='password' placeholder="password here..." required minLength={8} title="Password must contain at least one number, one uppercase and lowercase letter and  at least 8 characters" className={styles.passInput} onChange={handlePasswordChange} onKeyPress={handleKeyPress}/>
                <div className={styles.btnContainer}>
                    <button onClick={handleSignIn} disabled={state.isButtonDisabled}>Register Now</button>
                </div>
            </div>
        </div>
    )
}




export default SignInCard