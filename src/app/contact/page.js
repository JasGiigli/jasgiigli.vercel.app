'use client'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, such as sending data to a server or performing validation
    console.log(formData); // Example: Output form data to the console
    // After submission, you can clear the form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full h-32 resize-none"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
