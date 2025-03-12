import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = ({ setUser }) => {
    const [isRegistering, setIsRegistering] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save the user data (for simplicity, just the username)
        setUser(username);
        // Navigate back to the home page
        navigate('/');
    };

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <div className="registration-container">
            <h2>{isRegistering ? 'Register' : 'Sign In'}</h2>
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                {isRegistering && (
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="register-button">
                    {isRegistering ? 'Register' : 'Sign In'}
                </button>
            </form>
            <button className="toggle-button" onClick={toggleForm}>
                {isRegistering ? 'Already have an account? Sign In' : 'Don\'t have an account? Register'}
            </button>
        </div>
    );
};

export default Registration;