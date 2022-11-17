import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Orders = () => {
    const { user } = useContext(AuthContext);
    console.log('userCkec',user);
    const [order,setOrder]=useState({});
    useEffect(()=>{
        fetch(`http://localhost:5006/orders?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[user?.email])
    return (
        <div>
            <h1>{order.length}</h1>
        </div>
    );
};

export default Orders;