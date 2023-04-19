import React from 'react';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({item, handleRemoveItem}) => {
    const {id, img, name, price, quantity, shipping} = item;
    return (
        <div className='flex gap-6 mb-6 border-2 p-2 mx-32 rounded-lg' style={{width: '581px'}}>
            <img className='h-24 w-24 rounded' src={img} alt="" />
            <div className='flex justify-between items-center w-full'>
                <div>
                    <h3 className='text-xl'>{name}</h3>
                    <p>Price: <span className='text-orange-500'>${price}</span></p>
                    <p>Shipping Charge: <span className='text-orange-500'>${shipping}</span></p>
                </div>
                <button onClick={()=> handleRemoveItem(id)}>
                    <TrashIcon className="h-8 w-8 text-red-500 bg-red-200 rounded-full p-1 mr-8" />
                </button>
            </div>
        </div>
    );
};

export default ReviewItem;