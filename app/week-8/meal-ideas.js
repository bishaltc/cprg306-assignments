"use client";
import React, { useState, useEffect } from 'react';

const MealIdeas = ({ meal }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (meal) => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`);
      const data = await response.json();
      return data.meals || [];
  };

  const loadMealIdeas = async () => {
      const fetchedMeals = await fetchMealIdeas(meal);
      setMeals(fetchedMeals);
  };

  useEffect(() => {
      if (meal) {
          loadMealIdeas();
      }
  }, [meal]);

  return (
      <div  className='  bg-slate-500 rounded-lg p-2 m-1 '>
          <h2 className='text-xl  font-bold'>Meal Ideas for {meal}</h2>
          <ul className='w-full h-full' >
              {meals.map(meal => (
                  <li key={meal.idMeal}>{meal.strMeal}</li>
              ))}
          </ul>
      </div>
  );
};

export default MealIdeas;
