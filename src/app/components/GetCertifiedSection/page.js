'use client'
import React from 'react';

const GetCertifiedSection = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Get Certified</h2>
                    <p className="text-lg mb-6">
                        Take the next step in your career. Get certified and stand out in the industry.
                    </p>
                    <a
                        href="#"
                        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full inline-block transition duration-300"
                    >
                        View Certifications
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GetCertifiedSection;
