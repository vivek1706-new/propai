import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, MapPin, Users, MoreHorizontal } from 'lucide-react';

const BottomNav = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="bottom-nav">
            <Link to="/" className={`bottom-nav-item ${isActive('/') ? 'active' : ''}`}>
                <Home size={20} />
                <span>Home</span>
            </Link>
            <Link to="/listings?type=buy" className={`bottom-nav-item ${location.search.includes('type=buy') ? 'active' : ''}`}>
                <ShoppingCart size={20} />
                <span>Buy</span>
            </Link>
            <Link to="/listings?type=rent" className={`bottom-nav-item ${location.search.includes('type=rent') ? 'active' : ''}`}>
                <MapPin size={20} />
                <span>Rent</span>
            </Link>
            <Link to="/contacts" className={`bottom-nav-item ${isActive('/contacts') ? 'active' : ''}`}>
                <Users size={20} />
                <span>Contacts</span>
            </Link>
            <div className="bottom-nav-item">
                <MoreHorizontal size={20} />
                <span>More</span>
            </div>
        </nav>
    );
};

export default BottomNav;
