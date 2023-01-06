import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

import { setAuthToken } from '../../api/Auth';
const Login = () => {
    const { login,googleSignin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn=()=>{
        googleSignin().then(result=>{
            const user=result.user;
            console.log(user);
            setAuthToken(user);
        }).catch(e=>console.log(e))
        
    } 
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
            .then(result => {
                const user = result.user;
                const currentuser = {
                    email: user.email
                }
                console.log(user);
                fetch('http://localhost:5006/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentuser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('genius-token', data.token);
                        navigate(from,{replace:true})
                    })
            })
            .then(e => console.error(e));
    }
    return (
        <div className="hero w-full my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='3/4' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                              <Link to='/forgotpass'>Forgot password?</Link>  
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className='divider'>OR</div>
                        <div className="form-control ">
                            <button  onClick={handleGoogleSignIn} className="btn btn-primary">Log in With Google</button>
                        </div>
                        <div className='divider'>OR</div>
                        <p className='text-center' >New to Genius Car <Link className='text-orange-600 font-bold' to="/signup">Create New Account</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;