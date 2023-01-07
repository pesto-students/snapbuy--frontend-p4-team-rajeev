import React, { useState } from 'react'
import { Link } from 'react-router-dom'




const Login = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [roll, setRoll] = useState();

async function login()
{
console.log(email,password,roll)
let item= {email, password,roll};
let result = await fetch("https://snapbuy.onrender.com/shoppers/login", { 
method: 'POST',
headers: {
    "Content-Type":"application/json",
    "Accept" : 'application/json'
},
body:JSON.stringify(item)
});
result = await result.json();
localStorage.setItem("user-info",JSON.stringify(result));





}
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
              onChange={(e)=>setEmail(e.target.value)}
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
            <button type="submit" className="btn btn-primary" onClick={login}>
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