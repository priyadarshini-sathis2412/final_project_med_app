import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../config';

const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [serverError, setServerError] = useState('');

    const navigate = useNavigate();

    // Redirect to home if user is already logged in
    useEffect(() => {
        if (sessionStorage.getItem('auth-token')) {
            navigate('/');
        }
    }, [navigate]);

    // Validation function for email format
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return re.test(email);
    };

    // Function to handle login form submission
    const login = async (e) => {
        e.preventDefault();
        let valid = true;

        // Reset errors
        setEmailError('');
        setPasswordError('');
        setServerError('');

        // Validate email
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address.');
            valid = false;
        }

        // Validate password
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long.');
            valid = false;
        }

        if (!valid) return; // Stop submission if validation fails

        // Send a POST request to the login API endpoint
        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        });

        const json = await res.json();
        if (json.authtoken) {
            sessionStorage.setItem('auth-token', json.authtoken);
            sessionStorage.setItem('email', email);
            navigate('/');
            window.location.reload();
        } else {
            if (json.errors) {
                const errorMessages = json.errors.map((error) => error.msg).join(', ');
                setServerError(errorMessages);
            } else {
                setServerError(json.error);
            }
        }
    };

    return (
        <div>
            <div className="container">
                <div className="login-grid">
                    <div className="login-text">
                        <h2>Login</h2>
                    </div>
                    <div className="login-text">
                        Are you a new member?{' '}
                        <span>
                            <Link to="/signup" style={{ color: '#2190FF' }}>
                                Sign Up Here
                            </Link>
                        </span>
                    </div>
                    <br />
                    <div className="login-form">
                        <form onSubmit={login}>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    aria-describedby="helpId"
                                />
                                {/* Display email validation error */}
                                {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="form-control"
                                    placeholder="Enter your password"
                                    aria-describedby="helpId"
                                />
                                {/* Display password validation error */}
                                {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                            </div>

                            {/* Display server errors */}
                            {serverError && <div style={{ color: 'red' }}>{serverError}</div>}

                            <div className="btn-group">
                                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;