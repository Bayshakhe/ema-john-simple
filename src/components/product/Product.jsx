import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product
    // console.log(props.product)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h6 className='product-name'>{name}</h6>
                <h5 className='product-price'>Price: ${price}</h5>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} Stars</p>
            </div>
            <button className='btn'>Add to Cart</button>
        </div>
    );
};

export default Product;