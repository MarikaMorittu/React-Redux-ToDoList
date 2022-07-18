import React from "react";
import styles from '../loginCard/loginCard.module.css'

function LoginCard() {
  return <div className={styles.mainContainer}>
    {/* <input type='text' placeholder="text" />
    <button>Submit</button> */}
  {/* card container */}
  <h2>Login with your credentials: </h2>
  <div className={styles.cardContainer}>
    <input type='text' placeholder="email here..." className={styles.firstInput}/>
    <input type='text' placeholder="password here..." className={styles.secondInput}/>
    <div className={styles.btnContainer}>
      <button>Submit</button>
      <button>Register Now</button>
    </div>
  </div>
  </div>;
}

export default LoginCard;
