import React, { useState } from 'react';
import './GiveReviews.css'; // Add this for custom styling

// Function component for giving reviews
function GiveReviews() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0,
  });
  const [submitted, setSubmitted] = useState(false);

  // Function to handle button click to show form
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle rating change
  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.review && formData.rating > 0) {
      setSubmitted(true);
    }
  };

  return (
    <div className="give-review-container">
      {!showForm ? (
        <button className="open-form-btn" onClick={handleButtonClick}>
          Give Review
        </button>
      ) : !submitted ? (
        <form onSubmit={handleSubmit} className="review-form">
          <h3>Give Your Review</h3>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Review:</label>
            <textarea
              name="review"
              value={formData.review}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${formData.rating >= star ? 'selected' : ''}`}
                  onClick={() => handleRatingChange(star)}
                >
                  ⭐
                </span>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      ) : (
        <div className="submitted-message">
          <h4>Thank you for your review, {formData.name}!</h4>
          <p>{formData.review}</p>
          <p>Rating: {formData.rating} ⭐</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews;