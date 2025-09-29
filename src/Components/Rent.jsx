// src/Components/Rent.jsx
import React from 'react';
import { FaBed, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';

const propertiesForRent = [
    { id: 1, image: 'https://images.pexels.com/photos/221540/pexels-photo-221540.jpeg', title: '2 BHK Apartment', location: 'Viman Nagar, Pune', price: '₹ 35,000 / month', type: '2 BHK', area: '1250 Sq.Ft.' },
    { id: 2, image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg', title: 'Spacious 3 BHK', location: 'Adyar, Chennai', price: '₹ 50,000 / month', type: '3 BHK', area: '1800 Sq.Ft.' },
    { id: 3, image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg', title: 'Modern Studio Apartment', location: 'Saket, New Delhi', price: '₹ 25,000 / month', type: '1 RK', area: '600 Sq.Ft.' },
    { id: 4, image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg', title: 'Fully Furnished 2BHK', location: 'Indiranagar, Bangalore', price: '₹ 60,000 / month', type: '2 BHK', area: '1400 Sq.Ft.' },
    { id: 5, image: 'https://images.pexels.com/photos/323775/pexels-photo-323775.jpeg', title: '1 BHK Compact Apartment', location: 'Andheri East, Mumbai', price: '₹ 45,000 / month', type: '1 BHK', area: '700 Sq.Ft.' },
    { id: 6, image: 'https://images.pexels.com/photos/2029719/pexels-photo-2029719.jpeg', title: 'Gated Community Flat', location: 'Gachibowli, Hyderabad', price: '₹ 40,000 / month', type: '3 BHK', area: '1700 Sq.Ft.' },
    { id: 7, image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg', title: 'Corporate Lease Flat', location: 'Sector 62, Noida', price: '₹ 28,000 / month', type: '2 BHK', area: '1200 Sq.Ft.' },
    { id: 8, image: 'https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg', title: 'Independent Row House', location: 'Baner, Pune', price: '₹ 75,000 / month', type: '4 BHK', area: '2400 Sq.Ft.' },
    { id: 9, image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg', title: 'Builder Floor Apartment', location: 'Greater Kailash, New Delhi', price: '₹ 85,000 / month', type: '3 BHK', area: '2000 Sq.Ft.' },
    { id: 10, image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg', title: 'Single Room for Students', location: 'HSR Layout, Bangalore', price: '₹ 15,000 / month', type: '1 Room', area: '300 Sq.Ft.' }
];

const Rent = () => {
  return (
    <div className="container">
        <div className="page-header">
            <h1>Properties for Rent</h1>
            <p>Find the perfect place to call home from our rental listings.</p>
        </div>
        <div className="properties-grid">
            {propertiesForRent.map(prop => (
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
    </div>
  );
};
export default Rent;
