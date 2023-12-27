'use client'
import React from 'react';
import HeroSection from '@/app/HeroSection';

const HTML = () => {
  const title = 'HTML';
  const description = `HTML (HyperText Markup Language) is the standard markup language for creating web pages. Key points about HTML include:`;
  const keyPoints = [
    'Defines the structure and content of web pages using a markup system of elements and tags.',
    'Consists of various elements like headings, paragraphs, lists, links, images, and more.',
    'Follows a hierarchical structure known as the Document Object Model (DOM).',
    'Works in conjunction with CSS (Cascading Style Sheets) and JavaScript for creating interactive web pages.',
    'Constantly evolving with new versions and specifications for modern web development.',
    'Provides semantic elements for better accessibility and search engine optimization.',
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

export default HTML;
