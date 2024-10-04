// Import necessary modules from React library
import React from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom components
import Navbar from './Navbar/Navbar';
import LandingPage from './Landing_Page/Landing_page'; // Assuming LandingPage is the home page
import Login from './Login/Login'; // Assuming Login.js is in the Login folder
import Sign_Up from './Sign_Up/Sign_Up'; // Assuming Sign_Up.js is in the Sign_Up folder
import Notification from './Notification/Notification';
import ProfileForm from './ProfileForm/ProfileForm';
import ReportLayout from './ReportLayout/ReportLayout';
import InstantConsultation from './InstantConsultationBooking/InstantConsultationBooking/InstantConsultation';
import AppointmentFormIC from './AppointmentFormIC/AppointmentFormIC';
import ReviewForm from './ReviewForm/ReviewForm';
// Function component for the main App
function App() {

    // Render the main App component
    return (
        <div className="App">
            {/* Set up BrowserRouter for routing */}
            <BrowserRouter>
                {/* Display the Navbar component */}
                <Navbar />

                {/* Set up the Routes for different pages */}
                <Routes>
                    {/* Define individual Route components for different pages */}
                    <Route path="/" element={<LandingPage />} />   {/* Home/Landing page */}
                    <Route path="/login" element={<Login />} />     {/* Login page */}
                    <Route path="/sign_up" element={<Sign_Up />} /> {/* Sign Up page */}
                    <Route path="/instant-consultation" element={<InstantConsultation />} />
                    <Route path="/notification" element={<Notification/>}/> 
                    <Route path="/profile" element={<ProfileForm/>}/> 
                    <Route path="/reports" element={<ReportLayout/>}/> 
                    <Route path="/appointments" element={<AppointmentFormIC />} />
                    <Route path="/reviews" element={<ReviewForm />} />

                    {/* Add other routes as needed */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

// Export the App component as the default export
export default App;