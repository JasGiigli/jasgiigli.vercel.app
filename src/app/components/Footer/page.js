'use client'
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="container mx-auto flex flex-wrap justify-between items-start">
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="mb-2">Email: overview.jjj@gmail.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul className="flex flex-col space-y-2">
            <li>
              <a href="#" className="hover:text-blue-500">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                YouTube
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p>
            As a leading tech innovator, we endeavor to revolutionize industries through cutting-edge solutions. Our commitment lies in fostering seamless experiences and advancing technological frontiers. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae tellus non lacus ornare vestibulum. Aenean commodo lectus eget justo.
          </p>

        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 JasGiigli Tech Innovator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
