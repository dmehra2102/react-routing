import axios from 'axios'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext'
// https://reqres.in/api/login
function Login() {
  
  const {handleauth} = useContext(AuthContext);
  const navigate = useNavigate();

  const handlesubmit = ()=>{
    const users = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    axios.get("https://reqres.in/api/login",{users})
    .then(()=> handleauth(true))
    .catch(()=> console.log("shit man"));

    navigate(-2, {replace: true});
  }
  return (
    <div>
        <input type="text" defaultValue={"eve.holt@reqres.in"}/>
        <input type="text" defaultValue={"cityslicka"}/>
        <button onClick={handlesubmit}>Login</button>
    </div>
  )
}

export default Login