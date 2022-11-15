import React from 'react';

const ProductsCard = ({ product }) => {
    const { img, title, price } = product;
    return (
        <div className="card w-60 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className='text-amber-500'>Price ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
{/* <img src="https://i.ibb.co/wKN1SQZ/2.png" alt="2" border="0">
<img src="https://i.ibb.co/znyWrZW/1.png" alt="1" border="0">
<img src="https://i.ibb.co/VN0mV61/4.png" alt="4" border="0">
<img src="https://i.ibb.co/BNz5FzP/3.png" alt="3" border="0">
<img src="https://i.ibb.co/YjmvTRZ/5.png" alt="5" border="0"> */}