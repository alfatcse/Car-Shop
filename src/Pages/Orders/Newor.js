import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Newor = () => {
    const {user}=useContext(AuthContext);
    console.log('newOTTTT',user);
    return (
        <div>
            <h1>neww</h1>
        </div>
    );
};

export default Newor;