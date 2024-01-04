'use client'
import React from 'react';

const AboveAboveFooterSection = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">New Feature Alert!</h2>
                    <p className="text-lg mb-6">
                        Discover our latest feature that will revolutionize your coding experience.
                    </p>
                    <a
                        href="#"
                        className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full inline-block transition duration-300"
                    >
                        Explore Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboveAboveFooterSection;
