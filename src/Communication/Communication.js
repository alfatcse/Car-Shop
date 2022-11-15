import React from 'react';
import { FaCalendar, FaQuestion, FaMapMarker } from 'react-icons/fa';
const Communication = () => {
    return (
        <div className='flex justify-between p-10 bg-gray-900 text-white my-5 rounded-lg'>
            <div className='flex'>
                <div className='py-5 px-5 '>
                    <FaCalendar size={40}/>
                </div>
                <div className='py-4'>
                    <p className='font-medium'>We are open monday-friday</p>
                    <h1 className='font-bold'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div className='flex'>
                <div className='py-5 px-5'>
                    <FaQuestion size={40}/>
                </div>
                <div className='py-4'>
                    <p className='font-medium'>Have a question?</p>
                    <h1 className='font-bold'>+2546 251 2658</h1>
                </div>
            </div>
            <div className='flex '>
                <div className='py-5 px-5'>
                    <FaMapMarker size={40}/>
                </div>
                <div className='py-4'>
                    <p className='font-medium'>Need a repair? our address</p>
                    <h1 className='font-bold'>Liza Street, New York</h1>
                </div>

            </div>
        </div>
    );
};

export default Communication;