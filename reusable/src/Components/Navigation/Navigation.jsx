import React from 'react';
import { Link } from 'react-router-dom';
import '../Navigation/Navbar.css'

const Navigation = () => {
    return (
        <div className='navbg'>
            <gcds-container size="xl" centered="true" >
                <nav>
                    <h1>App Title</h1>
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
            </gcds-container>
        </div>

    );
};

export default Navigation;
