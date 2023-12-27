'use client'
import React from 'react';
import HeroSection from '@/app/HeroSection';

const Ruby = () => {
  const title = 'Ruby';
  const description = `Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity. Key points about Ruby include:`;
  const keyPoints = [
    'Focuses on developer happiness with elegant and readable syntax.',
    'Object-oriented language with features like classes, inheritance, and mixins.',
    'Supports metaprogramming, allowing changes to the structure of programs during runtime.',
    'Has a strong community and a rich ecosystem of gems (libraries) for various functionalities.',
    'Known for its Rails framework, which is used for building web applications.',
    'Promotes DRY (Don’t Repeat Yourself) and convention over configuration principles.',
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

export default Ruby;
