import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0
    for(const product of cart){
        // if(product.quantity === 0){
        //     product.quantity = 1
        // }
        // product.quantity = product.quantity || 1; 

        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice*3.5/100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div style={{position: 'sticky', top: '0'}} className='text-left ml-7 my-4'>
            <h3 className='font-bold text-lg mb-3'>Oder Summery</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 className='font-bold text-sm mt-3'>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;