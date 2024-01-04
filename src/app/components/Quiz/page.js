'use client'
import React from 'react';

const HomePage = () => {
    const navigateToQuiz = () => {
        // Navigate to the quiz page or handle the quiz logic here
        console.log('Navigating to Quiz');
    };

    const navigateToExercise = () => {
        // Navigate to the exercise page or handle the exercise logic here
        console.log('Navigating to Exercise');
    };

    return (
        <div className="flex justify-center mt-10 space-x-4 mb-6">
            <button onClick={navigateToQuiz} className="focus:outline-none">
                <div className="max-w-md bg-blue-100 border border-blue-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2 text-blue-700">Take a Quiz</h2>
                        <p className="text-blue-900">Test your knowledge with our interactive quizzes.</p>
                    </div>
                </div>
            </button>
            <button onClick={navigateToExercise} className="focus:outline-none">
                <div className="max-w-md bg-green-100 border border-green-500 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-2 text-green-700">Exercise</h2>
                        <p className="text-green-900">Practice your skills with coding exercises.</p>
                    </div>
                </div>
            </button>
        </div>
    );
};

export default HomePage;
