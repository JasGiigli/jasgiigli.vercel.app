// HeroSection.js
'use client'
import React from 'react';

const HeroSection = ({ title, description }) => {
  return (
    <div className="bg-gray-800 text-white py-[80px]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-8">{description}</p>
        {/* You can add any additional content, buttons, or images for the hero section */}
      </div>
    </div>
  );
};

export default HeroSection;
