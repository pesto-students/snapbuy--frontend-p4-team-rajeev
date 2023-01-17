import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { login } from '../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";
import {getUsers}  from '../redux/usersSlice';




const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.users);

  // const initialValues={
    // "email" : "harish2@gmail.com",
    // "password" : "harish1",
    // "role": "shopper"
// }
let initialValues={}
const apicall=(e)=>{
  e.preventDefault();
 initialValues= {
    "email" : username,
    "password" : password,
    "role": "shopper"
}
  console.log("Hello World",initialValues)
  dispatch(getUsers(initialValues))
}
const handleClick = (e) => {
  e.preventDefault();
  console.log("Hello World",initialValues)
  login(dispatch(initialValues))
};
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
            <label>Roll</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Roll"
              onChange={(e)=>setRoll(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={apicall} disabled={isFetching}>
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