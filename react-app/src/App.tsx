import React from "react";
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
  return <div className="App">
    <LoginCard />
  </div>;
}

export default App;
