import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Checkout = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div>
            <form>
                <h2 className="text-4xl">You are about to Order:{title}</h2>
                <h4 className="text-3xl">Price :{price}</h4>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='firstName' type="text" placeholder="Last Name" className="input input-bordered w-full input-bordered" />
                    <input name='lastName' type="text" placeholder="Your Phone" className="input input-bordered w-full input-bordered" />
                    <input name='phone' type="text" placeholder="First Name" className="input input-bordered w-full input-bordered" />
                    <input type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full input-bordered" readOnly />
                </div>
                <textarea name='message' className="textarea textarea-bordered w-full h-24" placeholder="Your Message"></textarea>
                <input type="submit" className="btn " value="Place Your Order" />
            </form>
        </div>
    );
};

export default Checkout;