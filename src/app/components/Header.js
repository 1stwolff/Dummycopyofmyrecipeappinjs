'use client'; // This makes the component a Client Component

import Link from 'next/link';
import React, { useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import { CATEGORY } from '@/app/constants/recipe.constants';

const Header = () => {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [recipeMenuOpen, setRecipeMenuOpen] = useState(false);

  const recipeMenuRef = useClickOutside(() => {
    setRecipeMenuOpen(false);
  });

  const categoryMenuRef = useClickOutside(() => {
    setCategoryMenuOpen(false);
  });

  return (
    <header className='bg-gradient-to-l from-green-400 via-blue-500 to bg-black shadow-md py-4'>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href='/' className='text-3xl font-bold text-white'>
          Return Home
        </Link>
        <nav>
          <ul className='flex space-x-8 items-center'>
            <li>
              <Link href='/recipes/create-edit' className='items-center text-white hover:text-black transition-colors duration-300'>
                New Recipe
              </Link>
            </li>
            <li className='relative' ref={categoryMenuRef}>
              <button className='text-white hover:text-black transition-colors duration-300' 
                onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
              >
                Categories
              </button>
              <ul className={`absolute top-full left-0 bg-white shadow-lg py-2 rounded-md mt-1 cursor-pointer ${categoryMenuOpen ? 'block' : 'hidden'}`}>
                
                {CATEGORY.map((category) => (
                  <li key={category} className='px-4 py-2 hover:bg-green-200'>
                    <Link
                      href={`/?category=${category}`}
                      className='text-gray-800 hover:text-blue-500 transition-colors duration-300'
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className='relative' ref={recipeMenuRef}>
              <button className='text-white hover:text-black transition-colors duration-300'
                onClick={() => setRecipeMenuOpen(!recipeMenuOpen)}
              >
                Recipes
              </button>
              <ul className={`absolute top-full left-0 bg-white shadow-lg py-2 rounded-md mt-1 cursor-pointer ${recipeMenuOpen ? 'block' : 'hidden'}`}>
                <li className='px-4 py-2 text-black'>
                  <Link href='/recipes/my/all'>Mine</Link>
                </li>
                <li className='px-4 py-2 text-black'>
                  <Link href='/recipes/my/favorites'>Saved</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href='/sign-in' className='items-center text-white hover:text-gray-300 transition-colors duration-300'>
                Sign in
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
