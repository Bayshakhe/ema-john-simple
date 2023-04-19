import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json').then(res=>res.json()).then(data => setProducts(data))
    },[])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        const storedCart = getShoppingCart();
        let savedCart = []
        // step 1: get id of the addedProduct
        for(const id in storedCart){
            // step 2: get product from products state by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    },[products])

    const handleAddToCart = (product) => {
        // const newCart = [...cart, product]
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id);
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exist.quantity = exist.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exist];
        }
        setCart(newCart);
        addToDb(product.id)
    }
    const handleClearAll = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearAll={handleClearAll}>
                    <Link to='/orders' className='bg-orange-500 text-white w-full flex justify-between items-center text-lg p-2 rounded mt-3 '> Review Order<ArrowRightIcon className="h-5 w-5 " /></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;