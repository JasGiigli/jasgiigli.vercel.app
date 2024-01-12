"use client";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="./JasGiigli.jpg" // Replace with your image URL
            alt="Company Logo or Image"
            className="rounded-3xl"
          />
        </div>
        <div>
          <h1 className="text-3xl text-center font-bold">JasGiigli</h1>
          <p className="text-lg mb-4">
            Welcome to our platform! JasGiigli Tech Innovator is dedicated to
            pushing the boundaries of technology and innovation. Our mission is
            to revolutionize the tech landscape by emotions.
          </p>
          <p className="text-lg">
            As a tech innovator, our journey is characterized by relentless
            exploration and overcoming challenges. We embrace the struggle of
            pushing through barriers, whether technical, conceptual, or
            market-driven. Our team is committed to technology adoption,
            pioneering research,and bridging gaps in emerging tech.
          </p>
          <p className="text-lg">
            The tech landscape is constantly evolving, presenting both
            opportunities and hurdles. We strive to tackle these challenges
            head-on, whether it's scalability issues, ethical considerations, or
            adapting to rapid technological shifts. Our dedication lies in
            shaping the future of tech by emotional ecosystem.
          </p>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default About;
