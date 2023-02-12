import React, { useEffect, useState } from 'react'

import { Link, useNavigate, } from 'react-router-dom'
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import {getUsers}  from '../redux/usersSlice';


import './Login.css'


const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("shopper");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.users);
  const rll = window.localStorage.getItem("token")
  const cll = window.localStorage.getItem("")
  const output = JSON.parse(rll)
  const navigate = useNavigate()

  // const initialValues={
    // "email" : "harish2@gmail.com",
    // "password" : "harish1",
    // "role": "shopper"
// }
const HandleDropdown = (e) =>{
  setRoll(e.target.value)

}
let initialValues={}
const apicall=(e)=>{
  e.preventDefault();
 initialValues= {
    "email" : username,
    "password" : password,
    "role": roll
}
 
  dispatch(getUsers(initialValues))
}
useEffect(() => {
  if (rll !== cll) {
    navigate('/');
  }
}, [rll, cll]);


  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label> Select Roll</label>
          
             <select className='dropdown' value={roll}  onChange={HandleDropdown}>

             <option value="shopper">shopper</option>

            <option value="seller">seller</option>


</select>


          </div>
          <div className="d-grid gap-2 mt-3"  onClick={apicall} >
            <button type="submit" className="btn btn-primary"  >
              Submit
            </button>
          
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
          <p className="forgot-password text-right mt-2">
            Don't Have account  <Link to="/Register">REGISTER</Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default Login