
'use client'
import React from 'react';

const AboveFooterSection = () => {
    return (
        <section className="bg-gray-200 py-12">
            <div className="container mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
                    <p className="text-lg mb-6">
                        Don't miss our limited-time offer! Grab it before it's gone.
                    </p>
                    <a
                        href="#"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full inline-block transition duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboveFooterSection;
