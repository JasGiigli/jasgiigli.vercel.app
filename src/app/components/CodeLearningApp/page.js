'use client'
import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const CodeLearningApp = () => {
    const additionalLanguages = [
        {
            language: 'HTML',
            description: 'A powerfulMarkup Language for building web applications.',
            url: '/home/ruby-on-rails',
        },
        {
            language: 'CSS',
            description: 'A powerful Styling Sheet for building web applications more attractive.',
            url: '/home/ruby-on-rails',
        },
        {
            language: 'JavaScript',
            description: 'JavaScript is a lightweighted, intrepreted, Just-in-time compiled programming language for building dynamix and intractive web applications.',
            url: '/home/ruby-on-rails',
        },
        {
            language: 'Ruby on Rails',
            description: 'A powerful framework for building web applications with Ruby.',
            url: '/home/ruby-on-rails',
        },

        {
            language: 'Go',
            description: 'A statically typed, compiled language for building simple, reliable, and efficient software.',
            url: '/home/go',
        },
        {
            language: 'SwiftUI',
            description: 'Build user interfaces across all Apple platforms with Swift.',
            url: '/home/swiftui',
        },
        {
            language: 'Kotlin',
            description: 'A modern programming language for Android app development.',
            url: '/home/kotlin',
        },
        {
            language: 'TypeScript',
            description: 'A superset of JavaScript with static typing and advanced tooling support.',
            url: '/home/typescript',
        },
        {
            language: 'Rust',
            description: 'A systems programming language focused on safety, speed, and concurrency.',
            url: '/home/rust',
        },
        {
            language: 'Dart',
            description: 'A language for building web, server, and mobile applications.',
            url: '/home/dart',
        },

        {
            language: 'Scala',
            description: 'A scalable language that integrates object-oriented and functional programming.',
            url: '/home/scala',
        },
        {
            language: 'Elixir',
            description: 'A functional, concurrent language for building scalable and maintainable applications.',
            url: '/home/elixir',
        },
        // Add more languages as needed
    ];

    // Existing languages array or initial content...
    const languages = [
        // Existing languages content...
        // Assuming it's declared here or fetched from elsewhere
    ];

    const allLanguages = [...languages, ...additionalLanguages];

    const LanguageCard = ({ language, description, url }) => {
        return (
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <h2 className="text-xl font-bold mb-2">{language}</h2>
                <p className="text-gray-600 mb-4">{description}</p>
                {/* Use NextLink from next/link */}
                <Link href={url} className="bg-darkyellow hover:bg-darkpurple text-white py-2 px-4 rounded-md inline-block">

                    Start Learning

                </Link>
            </div>
        );
    };

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4 text-center text-blue-600">Welcome to Your Code Learning App</h1>
            {/* Displaying Language Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-blue-600 text-center">
                {allLanguages.map((lang, index) => (
                    <LanguageCard key={index} language={lang.language} description={lang.description} url={lang.url} />
                ))}
            </div>
        </main>
    );
};

export default CodeLearningApp;
