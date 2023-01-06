import img from '../../assets/images/login/login.svg';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const ForgetPass = () => {
    const { passReset } = useContext(AuthContext);
    const handlePassReset=(event)=>{
        console.log('hh');
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Reset Pass!</h1>
                    <form onSubmit={handlePassReset} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Reset Password</button>
                        </div>
                        </form>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;