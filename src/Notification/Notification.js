import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'; // Assuming CSS is imported here

// Function component Notification to display user notifications
const Notification = ({ children }) => {
  // State variables to manage user authentication, username, doctor data, appointment data, and cancellation status
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulate logged-in status
  const [username, setUsername] = useState('john.doe@example.com'); // Dummy username
  const [doctorData, setDoctorData] = useState({
    name: 'Dr. Sarah Johnson',
    specialty: 'Dentist',
    experience: '9 years',
    ratings: '⭐⭐⭐⭐⭐'
  });
  const [appointmentData, setAppointmentData] = useState({ time: '10:30 AM, 12th Oct 2024' });
  const [isCanceled, setIsCanceled] = useState(false); // State to track if the appointment is canceled

  // Function to handle cancellation of the appointment
  const handleCancelAppointment = () => {
    setIsCanceled(true);
    // Optionally, remove the appointment data from localStorage if needed
    localStorage.removeItem(doctorData.name);
  };

  return (
    <div>
      {/* Render Navbar component */}
      <Navbar />

      {/* Render children components */}
      {children}

      {/* Conditionally render the appointment card if the appointment has not been canceled */}
      {isLoggedIn && appointmentData && !isCanceled && (
        <div className="appointment-card">
          <div className="appointment-card__content">
            <h3 className="appointment-card__title">Appointment Details</h3>
            <p className="appointment-card__message">
              <strong>Doctor:</strong> {doctorData.name}
            </p>
            <p className="appointment-card__message">
              <strong>Specialty:</strong> {doctorData.specialty}
            </p>
            <p className="appointment-card__message">
              <strong>Experience:</strong> {doctorData.experience}
            </p>
            <p className="appointment-card__message">
              <strong>Ratings:</strong> {doctorData.ratings}
            </p>
            <p className="appointment-card__message">
              <strong>Appointment Time:</strong> {appointmentData.time}
            </p>
            <button onClick={handleCancelAppointment} className="btn btn-danger">
              Cancel Appointment
            </button>
          </div>
        </div>
      )}

      {/* Show message if the appointment is canceled */}
      {isCanceled && (
        <div className="notification-message">
          Your appointment has been canceled.
        </div>
      )}
    </div>
  );
};

export default Notification;