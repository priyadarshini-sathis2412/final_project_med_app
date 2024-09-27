// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_page';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultationBooking/InstantConsultation'; 
import AppointmentFormIC from './Components/InstantConsultationBooking/InstantConsultationBooking/AppointmentFormIC/AppointmentFormIC';
import Notification from './Components/Notification/Notification';
import Login from './Components/Login/Login';
import  SignUp from './Components/Sign_Up/Sign_Up';
import Reviews from './Components/ReviewForm/ReviewForm';
import GiveReviews from './Components/ReviewForm/Feedback';
import ProfileForm from './Components/ProfileCard/ProfileCard';
// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>

          {/* Set up the Routes for different pages */}

                 <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/instant-consultation" element={<InstantConsultation />} />
            <Route path="/appointments" element={<AppointmentFormIC />} />
            <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/notification" element={<Notification />}/>
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/feedback" element={<GiveReviews />} />
                 <Route path="/profile" element={<ProfileForm />} />
               
          </Routes>
        </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;