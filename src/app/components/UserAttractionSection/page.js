'use client'
import React, { useEffect, useState } from 'react';

const UserAttractionSection = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const fetchedTestimonials = [
                    {
                        name: 'John Doe',
                        role: 'Full Stack Developer',
                        comment: 'This platform helped me improve my coding skills significantly. The interactive tutorials are fantastic!',
                    },
                    {
                        name: 'Jane Smith',
                        role: 'Frontend Developer',
                        comment: 'I love the comprehensive curriculum. It covers everything I need to know and more.',
                    },
                    {
                        name: 'Alice Johnson',
                        role: 'Backend Developer',
                        comment: 'The learning resources here have greatly improved my understanding of backend technologies.',
                    },
                    {
                        name: 'Bob Anderson',
                        role: 'Mobile App Developer',
                        comment: 'The tutorials on mobile development are well-structured and easy to follow.',
                    },
                    {
                        name: 'Eva Martinez',
                        role: 'UI/UX Designer',
                        comment: 'The platform has enhanced my understanding of design principles, greatly aiding my UI/UX projects.',
                    },
                    // Add more testimonials as needed
                ];

                // Simulate delay to mimic fetching from an API
                setTimeout(() => {
                    setTestimonials(fetchedTestimonials);
                }, 1000);
            } catch(error) {
                console.error('Error fetching testimonials:', error);
            }
        };

        fetchTestimonials();
    }, []);

    const TestimonialItem = ({ name, role, comment }) => {
        return (
            <div className="max-w-2xl mx-auto border border-gray-300 rounded-lg p-4 my-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-600 mb-2">{role}</p>
                <p className="text-gray-800">{comment}</p>
            </div>
        );
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4 mt-8 text-center text-blue-600">Join Our Happy Learners</h2>
            <div>
                {testimonials.map((testimonial, index) => (
                    <TestimonialItem
                        key={index}
                        name={testimonial.name}
                        role={testimonial.role}
                        comment={testimonial.comment}
                    />
                ))}
            </div>
        </div>
    );
};

export default UserAttractionSection;
