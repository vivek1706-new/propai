import React, { useState } from 'react';
import { Search, MapPin, Building, Home as HomeIcon } from 'lucide-react';
import { properties } from '../utils/properties';
import PropertyCard from '../components/PropertyCard';
import ContactModal from '../components/ContactModal';

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProp, setSelectedProp] = useState(null);
    const [modalStep, setModalStep] = useState(null); // { prop, mode }

    const openContact = (prop, mode) => {
        setSelectedProp(prop);
        setModalStep({ prop, mode });
    };

    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content anim-fade-up">
                    <h1 className="hero-title">Experience Better <span>Living</span></h1>
                    <p className="hero-subtitle">India's most trusted property platform. Verified listings, direct owner contacts, and expert guidance.</p>

                    <div className="search-tabs">
                        <button className="search-tab active">Buy</button>
                        <button className="search-tab">Rent</button>
                    </div>

                    <div className="search-bar">
                        <div className="search-input-wrap">
                            <Search className="search-icon" size={20} />
                            <input type="text" placeholder="Search by city, locality or project name" />
                        </div>
                        <button className="btn-search">Search</button>
                    </div>
                </div>
            </section>

            <section className="featured-section">
                <div className="section-header">
                    <h2 className="section-title">Verified Fresh <span>Property</span></h2>
                    <p className="section-subtitle">Handpicked homes just for you</p>
                </div>

                <div className="property-grid">
                    {properties.slice(0, 4).map(prop => (
                        <PropertyCard
                            key={prop.id}
                            property={prop}
                            onContact={openContact}
                        />
                    ))}
                </div>

                <div className="section-footer">
                    <a href="/listings" className="btn-outline">View All Properties</a>
                </div>
            </section>

            <ContactModal
                isOpen={!!modalStep}
                onClose={() => setModalStep(null)}
                property={modalStep?.prop}
                mode={modalStep?.mode}
            />
        </div>
    );
};

export default Home;
