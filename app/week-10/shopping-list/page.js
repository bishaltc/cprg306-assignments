"use client";

import { useUserAuth } from "../_utils/auth-context";
import React, { useState, useEffect } from 'react';
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; 
import { getItems, addItem } from "../_services/shopping-list-service"; 
import Link from "next/link"; 

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);  
    const [selectedMeal, setSelectedMeal] = useState(null); 

    
    useEffect(() => {
        const loadItems = async () => {
            if (user && user.uid) {
                const userItems = await getItems(user.uid);
                setItems(userItems);
            }
        };
        loadItems();
    }, [user]);

    
    const handleAddItem = async (newItem) => {
        if (user && user.uid) {
            const itemId = await addItem(user.uid, newItem);
            setItems([...items, { id: itemId, ...newItem }]);
        }
    };

    
    const handleItemSelect = (item) => {
        let cleanItem = item.name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
        .replace(/,.*/, "").trim(); 
        setSelectedMeal(cleanItem); 
    };

    if (!user) {
        return (
            <div className="flex items-center justify-center bg-gray-100">
                <div className="text-center">
                    <p className="text-xl">Please sign in to access your shopping list.</p>
                    <Link href="/week-10" className="text-blue-600 underline">Sign In</Link>
                </div>
            </div>
        );
    }

    return (
      <main className='bg-neutral-200'>
          <div className="flex">
              <div className="w-full">
                  <h1 className="text-3xl">Shopping List</h1>
                  <NewItem onAddItem={handleAddItem} />
                  <ItemList items={items} onItemSelect={handleItemSelect} />
              </div>
              <div className="w-full p-4 me-40">
                  <h2 className="bg-slate-500 text-xl font-bold">Meal Ideas</h2>
                  <MealIdeas meal={selectedMeal} />
              </div>

              {/* Optional for arranging purpose */}
              <div className="w-full"></div>
              <div className="w-1/5"></div>
              <div className="w-1/5"></div>
          </div>
      </main>
  );
}
