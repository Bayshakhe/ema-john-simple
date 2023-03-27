import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product
    // console.log(props.product)
    return (
        <div className='card'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <h5>Price: ${price}</h5>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
        </div>
    );
};

export default Product;