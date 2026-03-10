import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-logo">Nest<span>Finder</span></Link>

            <div className="navbar-links">
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                <Link to="/listings" className={`nav-link ${location.pathname === '/listings' ? 'active' : ''}`}>Listings</Link>
                <Link to="/contacts" className={`nav-link ${location.pathname === '/contacts' ? 'active' : ''}`}>Contacts</Link>
            </div>

            <div className="navbar-actions">
                <Link to="/listings" className="btn-post-desktop">Post Property</Link>
                <button className="navbar-menu-icon" aria-label="Menu">
                    <Menu size={20} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
