'use client'
import React from 'react';
import HeroSection from '@/app/HeroSection';

const Java = () => {
  const title = 'Java';
  const description = `Java is a widely-used, high-level, object-oriented programming language known for its platform independence and versatility. Key points about Java include:`;
  const keyPoints = [
    'Write once, run anywhere (WORA) principle, allowing Java code to run on any device that supports Java.',
    'Object-oriented programming language with features like classes, inheritance, and polymorphism.',
    'Strongly-typed language with automatic memory management (garbage collection).',
    'Extensive standard library and a vast ecosystem of frameworks and tools.',
    'Used in various domains including web development, enterprise applications, mobile apps (Android), and more.',
    'Maintained by Oracle Corporation and an active community, ensuring continuous improvements and updates.',
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

export default Java;
