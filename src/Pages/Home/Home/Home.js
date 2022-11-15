import React from 'react';
import Communication from '../../../Communication/Communication';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Communication></Communication>
        </div>
    );
};

export default Home;