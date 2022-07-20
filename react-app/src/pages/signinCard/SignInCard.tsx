import React from 'react'
import styles from '../signinCard/signinCard.module.css'

const SignInCard = () => {
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