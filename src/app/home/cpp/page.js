// CPP.js
'use client'
import React from 'react';
import HeroSection from '@/app/HeroSection'; // Import the HeroSection component

const CPP = () => {
  const title = 'C++';
  const description = `C++ is a powerful and versatile programming language known for its efficiency and flexibility. Here are some key points about C++:`;
  const keyPoints = [
    'C++ is an extension of the C programming language with additional features.',
    'Supports object-oriented programming (OOP) with features like classes, inheritance, and polymorphism.',
    'Provides low-level memory manipulation and high-level abstractions, making it suitable for system programming.',
    'Offers a rich standard library that includes containers, algorithms, and utilities.',
    'Used in developing software applications, games, operating systems, and embedded systems.',
    'Known for performance and efficiency, allowing control over hardware resources.',
  ];

  return (
    <>
      <HeroSection title={title} description={description} />
      <div className="container mx-auto px-4 py-8">
        <ul className="list-disc ml-6">
          {keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CPP;
