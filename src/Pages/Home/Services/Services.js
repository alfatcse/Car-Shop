import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAcs,setIsAsc]=useState(true);
    useEffect(() => {
        fetch(`http://localhost:5006/service?order=${isAcs?'asc':'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAcs]);
    return (
        <div>
            <div className='text-center'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-semibold'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
                <button className='btn btn-outline' onClick={()=>setIsAsc(!isAcs)}>{isAcs?'desc':'asc'}</button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;