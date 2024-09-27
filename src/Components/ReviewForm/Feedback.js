// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './Feedback.css';

// Function component for giving reviews
function GiveReviews() {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
    setFormData({
      name: '',
      review: '',
      rating: 0
    });
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      <h2 className='feedback_form'>Form with Message</h2>
      {!showForm ? (
        // Display button to open the form
        <button className='reviewButton' onClick={handleButtonClick}>Open Form</button>
      ) : (
        // Display form for giving feedback
        <form onSubmit={handleSubmit} className="feedback-form">
          <h2>Give Your Feedback</h2>
          {/* Display warning message if not all fields are filled */}
          {showWarning && <p className="warning">Please fill out all fields.</p>}
        
<input
               type="text"
               name="name"
               placeholder="Your Name"
               value={formData.name}
               onChange={handleChange}
             />
             
             <textarea
               name="review"
               placeholder="Review"
               value={formData.review}
               onChange={handleChange}
             ></textarea>
             <p>Rating</p>
             <h2>Star Rating</h2>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>


          {/* Submit button for form submission */}
          <button type="submit">Submit</button>
        </form>
      )}
      {/* Display the submitted message if available */}
      {submittedMessage && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GiveReviews