import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import ProfileCard from '../ProfileCard/ProfileCard'; // Import ProfileCard component

function NavBar() {
    const [userName, setUserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [showProfile, setShowProfile] = useState(false); // State to toggle profile dropdown
    const navigate = useNavigate();

    // Check sessionStorage for the logged-in user's name and email
    useEffect(() => {
        const storedName = sessionStorage.getItem('name');
        const storedEmail = sessionStorage.getItem('email');
        if (storedName) {
            setUserName(storedName);
            setEmail(storedEmail); // Fetch and set email
        }
    }, []);

    // Function to handle user logout
    const handleLogout = () => {
        // Clear session storage
        sessionStorage.removeItem('auth-token');
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('phone');

        // Reset the user state and navigate to home page after logout
        setUserName(null);
        setEmail(null);
        navigate('/');
        window.location.reload();
    };

    // Function to toggle profile visibility
    const handleProfileClick = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div>
            <nav>
                <div className="nav__logo">
                    <Link to="/">
                        StayHealthy
                        <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{ fill: '#3685fb' }}>
                            <title>Doctor With Stethoscope SVG icon</title>
                            <g>
                                <g>
                                    <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z"></path>
                                    <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z"></path>
                                    <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44.4,77.2-89.2v-157.4c-90.5-15.2-160.1-94-160.8-188.9H693.2z"></path>
                                </g>
                            </g>
                        </svg>
                    </Link>
                    <span>.</span>
                </div>
                <div className="nav__icon" onClick={handleClick}>
                    <i className="fa fa-times fa fa-bars"></i>
                </div>

                <ul className="nav__links active">
                    <li className="link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="link">
                        <Link to="/instant-consultation">Instant Consultation</Link>
                    </li>
                    <li className="link">
                        <a href="/appointments">Appointments</a>
                    </li>

                    {/* Conditional rendering based on whether the user is logged in */}
                    {userName ? (
                        <>
                            <li className="link" onClick={handleProfileClick}>
                                <span>Welcome, {userName}</span>
                            </li>
                            <li className="link">
                                <button className="btn1" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>

                            {/* Conditionally render ProfileCard */}
                            {showProfile && (
                                <div className="profile-dropdown">
                                    <ProfileCard userName={userName} email={email} />
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <li className="link">
                                <Link to="/sign_up">
                                    <button className="btn1">Sign Up</button>
                                </Link>
                            </li>
                            <li className="link">
                                <Link to="/login">
                                    <button className="btn1">Login</button>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}

function handleClick() {
    console.log('Hi');
}

export default NavBar;