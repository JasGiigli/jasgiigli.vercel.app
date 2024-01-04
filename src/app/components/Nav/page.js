'use client'
import React from 'react';
import NextLink from 'next/link'; // Renamed to NextLink to avoid naming conflict

const Nav = () => {
    return (
        <header className="bg-blue-600 text-white py-8">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold mb-4">Your Code Learning Platform</h1>
                <p className="text-lg mb-4">Master Coding with Ease</p>
                {/* Use NextLink instead of Link */}
                <NextLink href="/signup" className='bg-white text-blue-600 py-2 px-6 rounded-full inline-block hover:bg-blue-800 hover:text-white transition duration-300'>

                    Get Started

                </NextLink>
            </div>
        </header>
    );
};

export default Nav;
