'use client'
import React from 'react';
import HeroSection from '@/app/HeroSection';

const Swift = () => {
  const title = 'Swift';
  const description = `Swift is a powerful and intuitive programming language developed by Apple for building iOS, macOS, watchOS, and tvOS apps. Key points about Swift include:`;
  const keyPoints = [
    'Modern and expressive language with concise syntax.',
    'Provides safety and performance features like optionals, type inference, and memory management.',
    'Supports functional programming paradigms.',
    'Offers a rich standard library and interoperability with Objective-C.',
    'Continuously evolving with new language features and enhancements.',
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

export default Swift;
