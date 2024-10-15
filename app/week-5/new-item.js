"use client";

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

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

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const item = { name, quantity, category };
    console.log(item); 
    alert(`Added Item: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setName("");
    setQuantity(1); 
    setCategory("Produce"); 
  };

  return (
    <div className= "bg-emerald-400 w-2/6 mx-96 rounded-lg p-3">
      <form onSubmit={handleSubmit}>
       
        <div className="flex flex-col m-2 rounded ">
          <input
            className="p-2  rounded"
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>


        <div className="flex items-center justify-between ">
          
          <div className=" ml-15 flex items-center ">
            <button
              className={quantity === 1 ? 'p-2 bg-gray-300 text-black rounded' : 'p-2 bg-blue-600 text-black rounded'}
              onClick={decrement}
              disabled={quantity === 1}
              type="button"
            >
              -
            </button>
            <span className="m-2">{quantity}</span>
            <button
              className={quantity === 20 ? 'm-1 p-2 bg-gray-300 text-black rounded' : 'm-1 p-2 bg-blue-600 text-black rounded'}
              onClick={increment}
              disabled={quantity === 20}
              type="button"
            >
              +
            </button>
          </div>

         
          <div className="flex  mr-10">
           
            <select
              onChange={(event) => setCategory(event.target.value)}
              className="p-2 m-1 rounded"
             
            >
              <option></option>
              <option value="Produce">Produce</option>
              <option value="Dairy">Dairy</option>
              <option value="Bakery">Bakery</option>
              <option value="Meat">Meat</option>
              <option value="Frozen Foods">Frozen Foods</option>
              <option value="Canned Goods">Canned Goods</option>
              <option value="Dry Goods">Dry Goods</option>
              <option value="Beverages">Beverages</option>
              <option value="Snacks">Snacks</option>
              <option value="Household">Household</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>


        <div className="flex justify-center m-3">
          <button type="submit" className="  w-11/12 bg-blue-700  text-white rounded-full p-3 text-xl ">
            +
          </button>
        </div>
      </form>
    </div>
  );
}
