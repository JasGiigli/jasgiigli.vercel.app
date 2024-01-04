'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between font-semibold">
      <div className='flex items-center space-x-3 pl-9 '>
        <div>
          <Link href="/">
            <img
              src="/JasGiigli.jpg" // Correct path to the image in the public directory
              alt="JasGiigli Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full"
            />
          </Link>

        </div>
        <div>
          <h1 className='text-blue-600 hover:text-yellow-600 font-bold text-2xl'><Link href="/">Jasgiigli</Link></h1>
        </div>
      </div>
      <nav className="pr-9 md:hidden">
        <button onClick={toggleSidebar} className="text-3xl focus:outline-none">
          ☰ {/* You can replace this with your custom icon */}
        </button>
      </nav>
      <nav className={`pr-9 md:block ${showSidebar ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <li className="hover:underline hover:text-blue-600">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline hover:text-blue-600">
            <Link href="/courses">Courses</Link>
          </li>
          <li className="hover:underline hover:text-blue-600">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="hover:underline hover:text-blue-600">
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/signup" className="w-32 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 block text-center">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/login" className="w-32 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-100 transition duration-300 block text-center">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
