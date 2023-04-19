import React from 'react';
import './Cart.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const Cart = ({cart , handleClearAll, children}) => {
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
        <div style={{position: 'sticky', top: '0'}} className='text-left mx-7 my-4'>
            <h3 className='font-bold text-lg mb-3'>Oder Summery</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6 className='font-bold text-sm mt-3'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <button onClick={handleClearAll} className='bg-rose-500 text-white w-full flex justify-between items-center text-lg p-2 rounded mt-3 '>Clear Cart <TrashIcon className="h-5 w-5" /></button>

            {children}

        </div>
    );
};

export default Cart;