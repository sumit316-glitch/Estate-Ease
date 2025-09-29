// src/Components/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="container" style={{padding: "2rem 1.5rem"}}>
      <div className="page-header">
        <h1>About EstateEase</h1>
        <p>Our mission is to empower you with the right tools and knowledge to make better property decisions.</p>
      </div>
      <div style={{maxWidth: '800px', margin: '0 auto', lineHeight: '1.8'}}>
        <p>Founded in 2025, EstateEase was born from a simple idea: to make real estate in India accessible and straightforward for everyone.</p>
        <br />
        <p>We offer accurate listings, neighborhood insights, and a seamless user experience. Our team is passionate about helping you find not just a house, but a home.</p>
      </div>
    </div>
  );
};
export default AboutUs;
