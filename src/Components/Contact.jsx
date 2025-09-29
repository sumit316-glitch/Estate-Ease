// src/Components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="page-header">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Please fill out the form below or contact us directly.</p>
      </div>
      <div className="form-container">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group"><label htmlFor="name">Full Name</label><input type="text" id="name" required /></div>
          <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email-contact" required /></div>
          <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" rows="5" required></textarea></div>
          <button type="submit" className="btn btn-primary btn-full-width">Send Message</button>
        </form>
      </div>
    </>
  );
};
export default Contact;
