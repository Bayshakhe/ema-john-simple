import React, { useState } from 'react';
import Cart from './cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    
    const handleRemoveItem = id => {
        const rest = cart.filter(pd => pd.id !== id);
        removeFromDb(id);
        setCart(rest);
    }
    return (
        <div className='shop-container'>
            <div className="mt-16">
                {
                    cart?.map(item => <ReviewItem key={item.id} item={item} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;