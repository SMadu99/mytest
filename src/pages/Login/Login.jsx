import React, { useState } from 'react';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setError(null); // Clear any previous errors when the user starts typing again
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setError(null); // Clear any previous errors when the user starts typing again
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // You can perform login validation here, e.g., send the username and password to the server for authentication
        if ((username === 'admin' && password === 'admin') || (username === 'vogdoc' && password === 'vogdoc')) {
            // Set the user role for redirection
            const role = username === 'admin' ? '/mohadmindash' : '/vogdash';
            window.location.href = role; // Redirect to the dashboard based on user role
        } else {
            // Display an error message for invalid credentials
            setError('Invalid username or password');
        }
        // Reset the form after submission
        setUsername('');
        setPassword('');
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter your username"
                    required
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    required
                />
            </label>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
