import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navigation.css'; // Optional: add your styles

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link> {/* Link to Home (Sample page) */}
                </li>
                <li>
                    <Link to="/sample">Sample</Link> {/* Link to Sample route */}
                </li>
                {/* Add more links as needed */}
            </ul>
        </nav>
    );
};

export default Navigation;
