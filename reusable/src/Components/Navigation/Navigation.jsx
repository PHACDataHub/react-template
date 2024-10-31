import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/Navbar.css'

const Navigation = () => {
    return (
        <div className='navbg'>
            <gcds-container size="xl" centered="true" >
                <nav>
                    <h1>App Title</h1>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink> {/* Link to Home (Sample page) */}
                        </li>
                        <li>
                            <NavLink to="/sample" className={({ isActive }) => (isActive ? 'active' : '')}>Sample</NavLink> {/* Link to Sample route */}
                        </li>
                        {/* Add more links as needed */}
                    </ul>
                </nav>
            </gcds-container>
        </div>

    );
};

export default Navigation;
