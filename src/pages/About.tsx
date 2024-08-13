// src/pages/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-6 bg-base-100 text-base-content">
      <div className="container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our company! We specialize in providing top-notch CCTV solutions tailored to your security needs.
        </p>
        <div className="card bg-base-200 shadow-md mb-6">
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              Our mission is to offer reliable and innovative CCTV systems that help protect your property and ensure peace of mind. We are committed to excellence in both our products and our customer service.
            </p>
          </div>
        </div>
        <div className="card bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold mb-2">Why Choose Us?</h2>
            <ul className="list-disc pl-5">
              <li>High-quality, durable CCTV systems</li>
              <li>Advanced features for enhanced security</li>
              <li>Expert installation and support</li>
              <li>Competitive pricing and warranties</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
