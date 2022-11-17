import React, { useEffect, useState } from 'react';

const OrderRow = ({ order }) => {
    const { _id,serviceName, price, email, customer, phone, service } = order;
    const [orderService, setOrderservice] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5006/service/${service}`)
            .then(res => res.json())
            .then(data => setOrderservice(data))
    }, [service])
    const handleDelete=id=>{
          const proceed=window.confirm('Are you sure');
          if(proceed)
          {
            fetch(`http://localhost:5006/orders/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
          }
    }
    return (
        <tr>
            <th>
                <label>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-24 h-24">
                            {
                                orderService?.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{customer}</div>
                    </div>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrderRow;