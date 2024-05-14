import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <p className="mb-4">
        Welcome to our website! We are a team passionate about delivering high-quality products/services to our customers.
      </p>

      <p className="mb-4">
        Our mission is to [describe your mission or purpose]. We strive to provide an exceptional experience for our users, focusing on [core values, uniqueness, etc.].
      </p>

      <p className="mb-4">
        Feel free to explore our website and discover the range of products/services we offer. If you have any questions or feedback, don't hesitate to reach out to us through our <a href="/contact" className="text-blue-500">Contact page</a>.
      </p>

      <p>
        Thank you for being a part of our journey!
      </p>
    </div>
  );
};

export default About;
