// src/Components/Home.jsx
import React from 'react';
import { FaSearch, FaBed, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';
import './Home.css';

const featuredProperties = [
    { id: 1, image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg', title: '3 BHK Sea-Facing Apartment', location: 'Bandra West, Mumbai', price: '₹ 7.5 Cr', type: '3 BHK', area: '2200 Sq.Ft.' },
    { id: 2, image: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg', title: 'Independent Villa', location: 'Koramangala, Bangalore', price: '₹ 4.8 Cr', type: '4 BHK', area: '3000 Sq.Ft.' },
    { id: 3, image: 'https://images.pexels.com/photos/259599/pexels-photo-259599.jpeg', title: 'Luxury Builder Floor', location: 'DLF Phase 5, Gurgaon', price: '₹ 5.2 Cr', type: '4 BHK', area: '3200 Sq.Ft.' },
    { id: 4, image: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg', title: '2 BHK Apartment for Rent', location: 'Viman Nagar, Pune', price: '₹ 35,000 / month', type: '2 BHK', area: '1250 Sq.Ft.' },
    { id: 5, image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg', title: 'Penthouse with Terrace Garden', location: 'Jubilee Hills, Hyderabad', price: '₹ 6.0 Cr', type: '5 BHK', area: '4500 Sq.Ft.' },
    { id: 6, image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', title: 'Spacious 3 BHK for Rent', location: 'Adyar, Chennai', price: '₹ 50,000 / month', type: '3 BHK', area: '1800 Sq.Ft.' },
    { id: 7, image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg', title: 'Portuguese Style Villa', location: 'Assagao, Goa', price: '₹ 3.5 Cr', type: '3 BHK', area: '2500 Sq.Ft.' },
    { id: 8, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', title: 'Gated Community Flat', location: 'New Town, Kolkata', price: '₹ 95 Lakh', type: '3 BHK', area: '1600 Sq.Ft.' },
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content container">
          <h1>Find Your Dream Home in India</h1>
          <p>The simplest way to discover, buy, or rent properties across the country.</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter a locality, city, or project" />
            <button className="btn btn-accent"><FaSearch /><span>Search</span></button>
          </div>
        </div>
      </section>
      <section className="featured-properties container">
        <h2>Featured Properties</h2>
        <div className="properties-grid">
          {featuredProperties.map(prop => (
            <div key={prop.id} className="property-card">
              <img src={prop.image} alt={prop.title} />
              <div className="property-card-content">
                <h3>{prop.title}</h3>
                <p className="location"><FaMapMarkerAlt /> {prop.location}</p>
                <p className="price">{prop.price}</p>
                <div className="details">
                  <span><FaBed /> {prop.type}</span>
                  <span><FaRulerCombined /> {prop.area}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;