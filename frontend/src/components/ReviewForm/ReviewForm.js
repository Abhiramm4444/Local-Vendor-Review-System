import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = ({ onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please provide a rating before submitting!');
      return;
    }
    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <h3>Leave a Review</h3>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            selected={star <= rating}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
      <textarea
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        rows="4"
      ></textarea>
      <button type="submit" className="submit-btn">
        Submit Review
      </button>
    </form>
  );
};

const Star = ({ selected, onClick }) => {
  return (
    <span
      className={`star ${selected ? 'selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label="star"
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      ★
    </span>
  );
};

export default ReviewForm;
