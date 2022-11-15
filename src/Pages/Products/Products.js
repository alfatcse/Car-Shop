import React, { useEffect, useState } from 'react';
import ProductsCard from './ProductsCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    return (
        <div className='flex gap-3'>
            {
                products.map(product=><ProductsCard key={product.id} product={product}></ProductsCard>)
            }
        </div>
    );
};

export default Products;