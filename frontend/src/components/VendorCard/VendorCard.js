import React from 'react';
import './VendorCard.css';
import { Link } from 'react-router-dom';

const fallbackImageURL = 'https://via.placeholder.com/280x150?text=No+Image';

const VendorCard = ({ vendor, distance }) => {
  const handleImgError = (e) => {
    console.warn(`Image failed to load for vendor: ${vendor.name}, replacing with fallback image.`);
    e.target.onerror = null; // Prevent infinite loop if fallback also fails
    e.target.src = fallbackImageURL;
  };

  return (
    <div className="vendor-card">
      <img
        src={vendor.photo || fallbackImageURL}
        alt={vendor.name}
        className="vendor-photo"
        onError={handleImgError}
        loading="lazy"
      />
      <h3>{vendor.name}</h3>
      <p className="vendor-address">{vendor.address}</p>
      <p className="vendor-category">Category: {vendor.category}</p>
      <p className="vendor-distance">{distance} km away</p>
      <Link to={`/vendor/${vendor.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default VendorCard;

