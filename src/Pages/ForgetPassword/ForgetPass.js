import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const ForgetPass = () => {
    const { passReset } = useContext(AuthContext);
    const handlePassReset=()=>{
        const email = document.getElementById('email').value
        console.log(email);
        passReset(email)
          .then(result=>console.log(result))
          .catch(e=>console.log(e))
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
                  <span className="label-text">Email</span>
                </label>
                <input id='email' type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button onClick={handlePassReset} className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ForgetPass;