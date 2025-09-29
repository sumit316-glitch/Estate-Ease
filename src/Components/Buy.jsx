// src/Components/Buy.jsx
import React from 'react';
import { FaBed, FaRulerCombined, FaMapMarkerAlt } from 'react-icons/fa';

const propertiesForSale = [
    { id: 1, image: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg', title: '3 BHK Sea-Facing Apartment', location: 'Bandra West, Mumbai', price: '₹ 7.5 Cr', type: '3 BHK', area: '2200 Sq.Ft.' },
    { id: 2, image: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg', title: 'Independent Villa', location: 'Koramangala, Bangalore', price: '₹ 4.8 Cr', type: '4 BHK', area: '3000 Sq.Ft.' },
    { id: 3, image: 'https://images.pexels.com/photos/259599/pexels-photo-259599.jpeg', title: 'Luxury Builder Floor', location: 'DLF Phase 5, Gurgaon', price: '₹ 5.2 Cr', type: '4 BHK', area: '3200 Sq.Ft.' },
    { id: 4, image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg', title: 'Penthouse with Terrace Garden', location: 'Jubilee Hills, Hyderabad', price: '₹ 6.0 Cr', type: '5 BHK', area: '4500 Sq.Ft.' },
    { id: 5, image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg', title: 'Portuguese Style Villa', location: 'Assagao, Goa', price: '₹ 3.5 Cr', type: '3 BHK', area: '2500 Sq.Ft.' },
    { id: 6, image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg', title: 'Farmhouse with Pool', location: 'Lonavala, Maharashtra', price: '₹ 2.9 Cr', type: '4 BHK', area: '3500 Sq.Ft.' },
    { id: 7, image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', title: 'Gated Community Flat', location: 'New Town, Kolkata', price: '₹ 95 Lakh', type: '3 BHK', area: '1600 Sq.Ft.' },
    { id: 8, image: 'https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg', title: 'Ready to Move 2BHK', location: 'Sector 150, Noida', price: '₹ 80 Lakh', type: '2 BHK', area: '1100 Sq.Ft.' },
    { id: 9, image: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg', title: 'Heritage View Apartment', location: 'C-Scheme, Jaipur', price: '₹ 1.2 Cr', type: '3 BHK', area: '1900 Sq.Ft.' },
    { id: 10, image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg', title: 'Newly Constructed Flat', location: 'SG Highway, Ahmedabad', price: '₹ 70 Lakh', type: '2 BHK', area: '1300 Sq.Ft.' }
];

const Buy = () => {
  return (
    <div className="container">
      <div className="page-header">
        <h1>Properties for Sale in India</h1>
        <p>Explore thousands of homes, apartments, and villas for sale.</p>
      </div>
      <div className="properties-grid">
        {propertiesForSale.map(prop => (
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
export default Buy;
