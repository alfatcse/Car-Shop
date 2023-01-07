import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const ResetPassword = () => {
    const { passwordReset } = useContext(AuthContext);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const oobCode = urlParams.get('oobCode')
    console.log(oobCode);
    const navigate = useNavigate();
    const handlePassReset=()=>{
        const password = document.getElementById('password').value;
        console.log(password);
        passwordReset(oobCode,password).then(result=>console.log(result)).catch(e=>console.log(e));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
                <div className="text-center lg:text-left">
                    <img className='3/4' src={img} alt="" />
                </div>
         </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input id='password' type="password" placeholder="Password" name='Password' className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button onClick={handlePassReset} className="btn btn-primary">Reset Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ResetPassword;