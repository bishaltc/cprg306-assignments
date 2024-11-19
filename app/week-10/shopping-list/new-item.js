


"use client";

import { useState } from 'react';

export default function NewItem({ onAddItem }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        quantity,
        category,
    };
    onAddItem(newItem);
};


  return (
    <div className=" bg-slate-500 w-8/12 rounded-lg p-3 ">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-9/ m-2 rounded">
          <input
            className="p-2 rounded"
            type="text"
            placeholder="Item Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="flex ">
          <div className="ml-15 flex items-center">
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
          <select
            onChange={(event) => setCategory(event.target.value)}
            className="p-2 m-1 rounded"
            value={category}
          >
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
        <div className="flex justify-center m-3 w-5/6">
          <button type="submit" className="w-11/12 bg-blue-700 text-white rounded-full p-3 text-xl">
            +
          </button>
        </div>
      </form>
    </div>
  );
}
