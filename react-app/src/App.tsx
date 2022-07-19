import React, { useEffect, useState } from "react";
import "./App.css";

import { useNavigate} from 'react-router-dom'
import LoginCard from "./components/loginCard/LoginCard";


export let usersArray = [
  {
    mail: "marika@gmail.com",
    password: "Abc12-deF",
  },
  {
    mail: "elisa@gmail.com",
    password: "Abc34-deF",
  },
];


// const userRedirect = () => {
//   navigate:
// }


function App() {

  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   document.title = `status is: ${passwordLength} `;
  // })

  return <div className="App">
    <LoginCard />
    {/* <p>the status is: {passwordLength}</p>
    <button placeholder="click me" onClick={()=> setPasswordLength(passwordLength = 'true')}></button> */}
  </div>;
}

export default App;