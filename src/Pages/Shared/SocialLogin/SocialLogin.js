import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/Auth';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleSignin}=useContext(AuthContext);
    const handleGoogleSignIn=()=>{
        googleSignin().then(result=>{
            const user=result.user;
            console.log(user);
            setAuthToken(user);
        }).catch(e=>console.log(e))
        
    }
    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;