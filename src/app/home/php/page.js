'use client'
import React from 'react';
import HeroSection from '@/app/HeroSection';

const PHP = () => {
  const title = 'PHP';
  const description = `PHP is a widely-used, open-source scripting language primarily designed for web development. Key points about PHP include:`;
  const keyPoints = [
    'Server-side scripting language for creating dynamic web pages and web applications.',
    'Simple and easy-to-learn syntax, making it suitable for beginners.',
    'Supports various databases and has built-in database integration for MySQL, PostgreSQL, SQLite, and others.',
    'Has a large community and extensive documentation, offering numerous libraries and frameworks.',
    'Commonly used in conjunction with HTML, allowing developers to embed PHP code into HTML pages.',
    'Continuously evolving with regular updates and enhancements.',
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

export default PHP;
