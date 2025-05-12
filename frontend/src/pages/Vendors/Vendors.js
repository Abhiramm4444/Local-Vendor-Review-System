import React, { useState } from 'react';
import VendorCard from '../../components/VendorCard/VendorCard';
import vendorsData from '../../services/vendorsData';
import './Vendors.css';

const Vendors = () => {
  const [locationFilter, setLocationFilter] = useState('Hyderabad');

  const filteredVendors = vendorsData.filter(
    (vendor) => vendor.location === locationFilter
  );

  return (
    <section className="vendors-section">
      <h2 className="vendors-title">Vendors in {locationFilter}</h2>

      <div className="location-filter">
        <button
          className={locationFilter === 'Hyderabad' ? 'active' : ''}
          onClick={() => setLocationFilter('Hyderabad')}
          type="button"
        >
          Hyderabad
        </button>
        <button
          className={locationFilter === 'Bangalore' ? 'active' : ''}
          onClick={() => setLocationFilter('Bangalore')}
          type="button"
        >
          Bangalore
        </button>
      </div>

      <div className="vendor-list">
        {filteredVendors.length === 0 && <p>No vendors found.</p>}
        {filteredVendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </section>
  );
};

export default Vendors;
