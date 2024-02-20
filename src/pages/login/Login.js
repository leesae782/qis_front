import React,{useState} from "react";
import {  Link, useNavigate} from 'react-router-dom';
import { Div } from "../../components/common/CommonComponents";
import { useChangeValue } from "../../hooks/commonCustom";
import loginApi from "../../apis/loginApi";
import { useLogin } from "../../hooks/useLogin";
const Login = () => {    
  const {login,  funLogin} = useLogin();
  const [username , setUserName]  = useChangeValue('brycenkorea.qis@brycenkorea.co.kr'); 
  const [password , setPassword]  = useChangeValue('1234'); 


/**
 * 로그인 처리
 * 2024.01.18 - Saylee
 */
  const handleLogin = async() => {
    const loginData = {username : username , password : password}
    funLogin(loginData)
  }


  return (

    <>
        <h4 className="mt-0">Sign In</h4>
        <p className="text-muted mb-4">Enter your email address and password to access account.</p>
        
        {/* <form action="#"> */}
            <Div className="mb-3">
                <label htmlFor="emailaddress" className="form-label">Email address</label>
                <input className="form-control" type="email" id="emailaddress" required="" onChange={setUserName} defaultValue={username} placeholder="Enter your email"/>
            </Div>
            <Div className="mb-3">
                <Link to="/tttt" className="text-muted float-end"><small>Forgot your password?</small></Link>
                <label htmlFor="password" className="form-label">Password</label>
                <input className="form-control" type="password" required="" id="password" onChange={setPassword} defaultValue={password} placeholder="Enter your password"/>
            </Div>
            <Div className="mb-3">
                <Div className="form-check">
                    <input type="checkbox" className="form-check-input" id="checkbox-signin"/>
                    <label className="form-check-label" htmlFor="checkbox-signin">Remember me</label>
                </Div>
            </Div>
            <Div className="d-grid mb-0 text-center">
                <button className="btn btn-success" onClick={handleLogin}><i className="mdi mdi-login" ></i> Log In </button>
            </Div>
            
        {/* </form> */}

        <footer className="footer footer-alt">
            <p className="text-muted">Don't have an account? <span className="text-muted ms-1 mouse-hand"><b>Sign Up</b></span></p>
        </footer>
    </>

  );

};

export default Login