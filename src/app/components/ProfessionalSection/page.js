'use client'
import React from 'react';

const ProfessionalSection = () => {
    return (
        <section className="container mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
                    <p className="text-lg mb-4">We are dedicated to providing the best code learning experience:</p>
                    <ul className="text-lg">
                        <li className="mb-2">Expertly crafted curriculum</li>
                        <li className="mb-2">Interactive and engaging tutorials</li>
                        <li className="mb-2">Community support and collaboration</li>
                        <li className="mb-2">Personalized learning journey tracking</li>
                    </ul>
                </div>

                <div className="text-center">
                    {/* SVG Animation */}
                    <div className="w-full relative" style={{ paddingBottom: '75%' }}>
                        <svg
                            className="absolute inset-0"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid slice"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect x="10" y="10" width="60" height="60" rx="15" fill="#F3F4F6" stroke="#4B5563" strokeWidth="3">
                                <animate
                                    attributeName="stroke"
                                    dur="5s"
                                    values="#0fb7fa;#0f84fa; #0f46fa; #0f17fa; #00a9f7"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <rect x="15" y="15" width="50" height="50" rx="10" fill="#F3F4F6">
                                <animate
                                    attributeName="fill"
                                    dur="5s"
                                    values="#0fb7fa;#0f84fa; #0f46fa; #0f17fa; #00a9f7"
                                    repeatCount="indefinite"
                                />
                            </rect>
                            <text x="20" y="46" fontSize="20" fontWeight="bold">
                                <tspan>&lt;/&gt;</tspan>
                                <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    values="0 0; 5 5; 0 0; -5 -5; 0 0;"
                                    dur="3s"
                                    repeatCount="indefinite"
                                />
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfessionalSection;
