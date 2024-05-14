import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <p className="mb-4">
        We'd love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to reach out to us.
      </p>

      <div className="flex flex-col">
        <label htmlFor="name" className="text-lg font-medium mb-2">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="John Doe" className="border border-gray-300 p-2 mb-4" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-lg font-medium mb-2">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="john@example.com" className="border border-gray-300 p-2 mb-4" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-lg font-medium mb-2">Your Message:</label>
        <textarea id="message" name="message" placeholder="Type your message here..." rows="4" className="border border-gray-300 p-2 mb-4"></textarea>
      </div>

      <button className="bg-red-500 text-white p-2 rounded-md">Send Message</button>
    </div>
  );
};

export default Contact;
