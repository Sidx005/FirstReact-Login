import  React from 'react';
import './LoginForm.css';
import {FaUser, FaLock} from "react-icons/fa";
const LoginForm=()=>{
    return(
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" name="" id="" placeholder='Username' required />
                 <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" name="" id="" placeholder='Password' required />
                  <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" name="" id="" />Remember Me</label>
                    <a href="#">Forgot Password</a>
                </div>
                <button type="submit" className='login'>Login</button>
             <div className="register">
                <p>Don't have account? <a href="#">Register</a></p>
             </div>

            </form>
        </div>

    );
}
export default LoginForm;