// src/Components/Sell.jsx
import React from 'react';

const Sell = () => {
  return (
    <>
      <div className="page-header">
        <h1>Sell Your Property</h1>
        <p>List your property with EstateEase and reach millions of potential buyers across India.</p>
      </div>
      <div className="form-container">
        <h2>Property Listing Form</h2>
        <form>
          <div className="form-group"><label htmlFor="prop-address">Property Address / Locality</label><input type="text" id="prop-address" required /></div>
          <div className="form-group"><label htmlFor="prop-price">Asking Price (in ₹)</label><input type="number" id="prop-price" required /></div>
          <div className="form-group"><label htmlFor="prop-description">Description</label><textarea id="prop-description" rows="4" required></textarea></div>
          <button type="submit" className="btn btn-primary btn-full-width">Submit Listing</button>
        </form>
      </div>
    </>
  );
};
export default Sell;
