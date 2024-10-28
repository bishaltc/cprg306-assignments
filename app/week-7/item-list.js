"use client";

import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div className="mb-4">
        <label>Sort by:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`mr-2 p-2 rounded ${sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`p-2 rounded ${sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Category
        </button>
      </div>

      <ul>
        {sortedItems.map(item => (
          <li key={item.id} className="bg-slate-500 m-4 w-1/5">
            <Item name={item.name} quantity={item.quantity} category={item.category} />
          </li>
        ))}
      </ul>
    </div>
  );
}
