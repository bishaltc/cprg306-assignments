"use client";


import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  
  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

 
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className=" bg-emerald-400  w-1/6    mx-96 rounded-lg p-3">

      <div className="flex items-center  m-2">
       
        <button 
          className={quantity === 1 ? 'p-2 bg-gray-300 text-black rounded ' : 'p-2 bg-blue-600 text-black rounded'}
          onClick={decrement}
          disabled={quantity === 1}
        >
          -
        </button>

        <span className='m-2'>{quantity}</span>

       
        <button 
          className={quantity === 20 ? ' m-1 p-2 bg-gray-300 text-black rounded' : '  m-1 p-2 bg-blue-600 text-black rounded'}
          onClick={increment}
          disabled={quantity === 20}
        >
          +
        </button>
      </div>
    </div>
  );
}
