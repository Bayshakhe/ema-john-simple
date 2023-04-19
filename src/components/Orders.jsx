import React, { useState } from 'react';
import Cart from './cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid'

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    
    const handleRemoveItem = id => {
        const rest = cart.filter(pd => pd.id !== id);
        removeFromDb(id);
        setCart(rest);
    }

    const handleClearAll = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="mt-16">
                {
                    cart?.map(item => <ReviewItem key={item.id} item={item} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearAll={handleClearAll}>
                <Link to='/checkout' className='bg-orange-500 text-white w-full flex justify-between items-center text-lg p-2 rounded mt-3 '> Proceed Checkout<ClipboardDocumentCheckIcon className="h-5 w-5 " /></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;