'use client'
import React from 'react';
import HeroSection from '@/app/HeroSection';

const Python = () => {
  const title = 'Python';
  const description = `Python is a high-level, interpreted programming language known for its simplicity and readability. Key points about Python include:`;
  const keyPoints = [
    'Easy-to-read syntax with a focus on code readability and simplicity.',
    'Supports multiple programming paradigms: procedural, object-oriented, and functional programming.',
    'Has a vast standard library and a large ecosystem of third-party packages.',
    'Used in various domains like web development, data analysis, machine learning, artificial intelligence, and more.',
    'Known for its readability, making it ideal for beginners and experienced developers alike.',
    'Continuously evolving with regular updates and new features.',
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

export default Python;
