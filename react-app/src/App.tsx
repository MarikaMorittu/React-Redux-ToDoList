import React, { useEffect, useState } from "react";
import "./App.css";

import { useNavigate} from 'react-router-dom'
import LoginCard from "./pages/loginCard/LoginCard";
import SignInCard from "./pages/signinCard/SignInCard";




// const userRedirect = () => {
//   navigate:
// }


function App() {

  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   document.title = `status is: ${passwordLength} `;
  // })

  return <div className="App">
    {/* <SignInCard /> */}
    <LoginCard />
    {/* <p>the status is: {passwordLength}</p>
    <button placeholder="click me" onClick={()=> setPasswordLength(passwordLength = 'true')}></button> */}
  </div>;
}

export default App;