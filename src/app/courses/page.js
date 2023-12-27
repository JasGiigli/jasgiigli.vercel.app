'use client'
import React from 'react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'HTML',
      description: 'Learn the structure of web pages with Hypertext Markup Language.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 2,
      title: 'CSS',
      description: 'Style your web pages beautifully with Cascading Style Sheets.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'Add interactivity and dynamics to your websites with JavaScript.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 4,
      title: 'Python',
      description: 'A versatile language used in web development, data analysis, and more.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 5,
      title: 'Java',
      description: 'A widely used programming language for building robust applications.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 6,
      title: 'Swift',
      description: 'Develop iOS and macOS applications with Swift programming language.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 1,
      title: 'C++',
      description: 'A powerful and versatile language known for efficiency and flexibility.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 2,
      title: 'Ruby',
      description: 'An elegant and user-friendly language focused on simplicity and productivity.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 3,
      title: 'PHP',
      description: 'A server-side scripting language for web development with a focus on simplicity.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 4,
      title: 'SQL',
      description: 'Structured Query Language used for managing and manipulating databases.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 5,
      title: 'Rust',
      description: 'A systems programming language known for its safety and performance.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 6,
      title: 'TypeScript',
      description: 'A superset of JavaScript with static typing for large-scale applications.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 1,
      title: 'Go',
      description: 'A statically typed, compiled language known for its simplicity and efficiency.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 2,
      title: 'Kotlin',
      description: 'A modern programming language used for Android app development and more.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 3,
      title: 'Scala',
      description: 'A scalable language combining object-oriented and functional programming.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 4,
      title: 'Perl',
      description: 'A highly capable and flexible language used for various tasks including web development.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 5,
      title: 'Haskell',
      description: 'A purely functional programming language known for its mathematical elegance.',
      instructor: 'Junaid Ali Shah',
    },
    {
      id: 6,
      title: 'Dart',
      description: 'A language used for building web, mobile, and server applications, developed by Google.',
      instructor: 'Junaid Ali Shah',
    },
    // Add more languages or courses as needed
  ];
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="border border-gray-300 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-2">{course.title}</h2>
            <p className="text-gray-600 mb-2 font-semibold">Instructor: {course.instructor}</p>
            <p className="mb-2">{course.description}</p>
            {/* Add buttons, links, or additional details for each course */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
