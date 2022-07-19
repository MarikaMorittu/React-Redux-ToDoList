import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import styles from '../loginCard/loginCard.module.css'



function LoginCard() {

  const [password, setPassword] = useState(false);
  // password checks
  const [passwordLength, setPasswordLength] = useState(false)
  const [passwordRequiredLength, setPasswordRequiredLength] = useState(8)
  const [passwordUppercase, setPasswordUppercase] = useState(false)
  const [passwordNumber, setPasswordNumber] = useState(false)
  const [passwordSpecialChar, setPasswordSpecialChar] = useState(false)


  // const passwordCheck = (password: any) => {
  //   if (password < 8){
  //     console.log('OK')
  //   }else{
  //     console.log('NO')
  //   }
  // }


  // const [state, setState] = useState({email: '', password: ''})

  // create email validation hook
  // const checkUserEmail = (mail: any) => {
  //   const validEmail = /@/.test(mail)
  //   return validEmail
  // }

  // const validEmail = checkUserEmail(state.email)

  // handle change function
  // const handleChangeEmail = (mail: any) => {
  //   if(mail == validEmail){
  //     console.log('ok')
  //   }else{
  //     console.log('no')
  //   }
  // }


  return <div className={styles.mainContainer}>
    <h2>Login with your credentials: </h2>
    <div className={styles.cardContainer}>
      <input type='text' placeholder="email here..." className={styles.firstInput}/>
      <input type='text' placeholder="password here..." className={styles.firstInput}/>
      {/* <input onChange={passwordCheck} value={''} type='text' placeholder="password here..." className={styles.secondInput}/> */}
      <div className={styles.btnContainer}>
        <button>Submit</button>
        <button>Register Now</button>
      </div>
    </div>
  </div>;
}

export default LoginCard;
