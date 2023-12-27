'use client'
import React from 'react';
import HeroSection from '@/app/HeroSection';

const CSS = () => {
  const title = 'CSS';
  const description = `CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of web pages. Key points about CSS include:`;
  const keyPoints = [
    'Used to style the appearance and layout of HTML elements on a web page.',
    'Provides a wide range of styling options like colors, fonts, spacing, positioning, and more.',
    'Works in conjunction with HTML to create visually appealing and responsive web designs.',
    'Supports various selectors to target specific HTML elements for styling.',
    'Allows the use of classes and IDs for applying styles to individual or multiple elements.',
    'Enables the creation of dynamic and interactive web pages by applying styles based on user actions.',
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

export default CSS;
