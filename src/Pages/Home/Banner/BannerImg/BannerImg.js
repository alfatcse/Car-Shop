import React from 'react';

const BannerImg = ({image}) => {
    return (
        <div id="slide1" className="carousel-item relative w-full">
        <div className='carousel-img'>
            <img src={image} className="w-full" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='text-6xl text-white font-bold'>Affordable <br />Price for all</h1>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 w-.5/5 left-24 top-1/2">
            <p className='text-xl text-white font-bold'>There are many variations of passages of available ,but <br />
                the majority have suffered alteration in some form
            </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-.5/5 left-24 top-3/4">
            <button className="btn mr-5 btn-warning">Success</button>
            <button className="btn btn-outline btn-warning">Warning</button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default BannerImg;