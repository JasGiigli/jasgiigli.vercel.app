'use client'
import React from 'react';

const CenteredSection = () => {
    return (
        <section className="bg-gray-200 py-12">
            <div className="container mx-auto flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Centered Section</h2>
                    <p className="text-lg mb-6">
                        This section is centered on the page. Add your content here.
                    </p>
                    <a href="#"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full inline-block transition duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CenteredSection;
