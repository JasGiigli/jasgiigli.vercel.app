'use client'
import React from 'react';
import HeroSection from '@/app/HeroSection'; // Assuming the HeroSection component is in the correct directory

const JavaScript = () => {
  const title = 'JavaScript';
  const description = `JavaScript is a versatile scripting language used primarily in web development. Here are some key points about JavaScript:`;
  const keyPoints = [
    'JavaScript is widely used for client-side scripting in web development.',
    'Supports object-oriented, functional, and imperative programming styles.',
    'Provides powerful features for dynamic content, interactivity, and manipulation of HTML and CSS.',
    'Can be used with various frameworks and libraries like React, Angular, and Vue for building modern web applications.',
    'Used in both front-end and back-end development with Node.js.',
    'Continuously evolving with new ECMAScript standards introducing new features and improvements.',
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

export default JavaScript;
