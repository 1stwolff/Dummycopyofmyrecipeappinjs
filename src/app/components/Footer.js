'use client'; 

import Link from 'next/link';
import React, { useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

const Footer = () => {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [recipeMenuOpen, setRecipeMenuOpen] = useState(false);

  const recipeMenuRef = useClickOutside(() => {
    setRecipeMenuOpen(false);
  });

  const categoryMenuRef = useClickOutside(() => {
    setCategoryMenuOpen(false);
  });

  return (
    <footer className='bg-gradient-to-l from-green-400 via-blue-500 to bg-black shadow-md py-4'>
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href='/' className='text-3xl font-bold text-white pb-1'>
          to the top
        </Link>
       
         
            
            <li>
              <Link href='/AuthPage/LogRegister' className='items-center text-white hover:text-gray-300 transition-colors duration-300'>
                Log Out/login page
              </Link>
            </li>
          
      </div>
    </footer>
  );
};

export default Footer;