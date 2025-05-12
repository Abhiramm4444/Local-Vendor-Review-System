import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import vendorsData from '../../services/vendorsData';
import './VendorDetail.css';

const VendorDetail = () => {
  const { id } = useParams();
  const vendorId = parseInt(id, 10);

  const [vendor, setVendor] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const foundVendor = vendorsData.find((v) => v.id === vendorId);
    if (foundVendor) {
      setVendor(foundVendor);
      setReviews(foundVendor.reviews || []);
    }
  }, [vendorId]);

  const handleReviewSubmit = (review) => {
    const newReview = {
      ...review,
      id: reviews.length + 1,
      user: 'Anonymous',
      created_at: new Date().toISOString().split('T')[0],
    };
    setReviews((prev) => [...prev, newReview]);
    setVendor((prevVendor) => ({
      ...prevVendor,
      reviews: [...reviews, newReview],
    }));
  };

  if (!vendor) {
    return (
      <div className="vendor-detail loading">
        <p>Vendor not found.</p>
      </div>
    );
  }

  return (
    <div className="vendor-detail">
      <h2 className="vendor-name">{vendor.name}</h2>
      <img src={vendor.photo} alt={vendor.name} className="vendor-photo" />
      <p className="vendor-address">{vendor.address}</p>
      <p className="vendor-phone">Phone: {vendor.phone || 'N/A'}</p>
      <p className="vendor-category">Category: {vendor.category}</p>

      <section className="reviews-section">
        <h3>Reviews</h3>
        {reviews.length === 0 ? (
          <p className="no-reviews">No reviews yet. Be the first to review!</p>
        ) : (
          <ul className="reviews-list">
            {reviews.map((rev) => (
              <li key={rev.id} className="review-item">
                <div className="review-rating">Rating: {rev.rating} ★</div>
                <div className="review-comment">"{rev.comment}"</div>
                <div className="review-date">
                  {new Date(rev.created_at).toLocaleDateString()}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <ReviewForm onSubmit={handleReviewSubmit} />
    </div>
  );
};

export default VendorDetail;
