import React, { useState, useEffect } from 'react';
import { Search, MapPin, Building, Home as HomeIcon, ChevronRight, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { properties } from '../utils/properties';
import PropertyCard from '../components/PropertyCard';
import ContactModal from '../components/ContactModal';

const Home = () => {
    const navigate = useNavigate();
    const [selectedProp, setSelectedProp] = useState(null);
    const [modalStep, setModalStep] = useState(null); // { prop, mode }
    const [searchType, setSearchType] = useState('buy');
    const [cityInput, setCityInput] = useState('');
    const [bhkFilter, setBhkFilter] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);

    const cityOptions = ["Mumbai", "Bengaluru", "Hyderabad", "Delhi NCR", "Pune", "Chennai", "Koramangala", "Bandra", "Whitefield", "Gurgaon"];
    const filteredCities = cityOptions.filter(city => city.toLowerCase().includes(cityInput.toLowerCase()));

    const openContact = (prop, mode) => {
        setModalStep({ prop, mode });
    };

    const handleSearch = (cityName) => {
        const params = new URLSearchParams();
        const city = cityName || cityInput;
        if (searchType !== 'buy') params.set('type', searchType);
        if (city) params.set('city', city);
        if (bhkFilter) params.set('bhk', bhkFilter);
        navigate(`/listings?${params.toString()}`);
    };

    return (
        <div className="home-page">
            <section className="hero">
                <div className="hero-content anim-fade-up">
                    <h1 className="hero-title">Experience Better <span>Living</span></h1>
                    <p className="hero-subtitle">India's most trusted property platform. Verified listings, direct owner contacts, and expert guidance.</p>

                    <div className="search-card">
                        <div className="search-tabs">
                            <button
                                className={`search-tab ${searchType === 'buy' ? 'active' : ''}`}
                                onClick={() => setSearchType('buy')}
                            >Buy</button>
                            <button
                                className={`search-tab ${searchType === 'rent' ? 'active' : ''}`}
                                onClick={() => setSearchType('rent')}
                            >Rent</button>
                            <button
                                className={`search-tab ${searchType === 'commercial' ? 'active' : ''}`}
                                onClick={() => setSearchType('commercial')}
                            >Commercial</button>
                        </div>

                        <div className="search-body">
                            <div className="search-row">
                                <div className="search-input-wrap">
                                    <MapPin className="search-input-icon" size={18} />
                                    <input
                                        className="search-input"
                                        type="text"
                                        placeholder="Search city, locality or project"
                                        value={cityInput}
                                        onChange={(e) => {
                                            setCityInput(e.target.value);
                                            setShowSuggestions(true);
                                        }}
                                        onFocus={() => setShowSuggestions(true)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSearch();
                                                setShowSuggestions(false);
                                            }
                                        }}
                                    />
                                    {showSuggestions && cityInput.length > 0 && filteredCities.length > 0 && (
                                        <div className="search-suggestions-dropdown">
                                            {filteredCities.map(city => (
                                                <div
                                                    key={city}
                                                    className="suggestion-item"
                                                    onClick={() => {
                                                        setCityInput(city);
                                                        setShowSuggestions(false);
                                                        handleSearch(city);
                                                    }}
                                                >
                                                    <MapPin size={14} /> {city}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <select
                                    className="search-select"
                                    value={bhkFilter}
                                    onChange={(e) => setBhkFilter(e.target.value)}
                                >
                                    <option value="">Any BHK</option>
                                    <option value="1">1 BHK</option>
                                    <option value="2">2 BHK</option>
                                    <option value="3">3 BHK</option>
                                    <option value="4">4+ BHK</option>
                                </select>
                            </div>
                            <button className="search-btn" onClick={() => handleSearch()}>
                                <Search size={18} /> Search Properties
                            </button>
                        </div>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <strong>15K+</strong>
                            <small>Properties</small>
                        </div>
                        <div className="hero-stat">
                            <strong>120+</strong>
                            <small>Cities</small>
                        </div>
                        <div className="hero-stat">
                            <strong>50K+</strong>
                            <small>Verified Owners</small>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section-header">
                    <h2 className="section-title">Verified Fresh <span>Property</span></h2>
                    <Link to="/listings" className="section-link">View All <ChevronRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /></Link>
                </div>

                <div className="cards-scroll anim-fade-in">
                    {properties.slice(0, 6).map(prop => (
                        <PropertyCard
                            key={prop.id}
                            property={prop}
                            onContact={openContact}
                        />
                    ))}
                </div>
            </section>

            <section className="section section-alt">
                <div className="section-header">
                    <h2 className="section-title">Popular <span>Localities</span></h2>
                </div>
                <div className="locality-scroll">
                    {[
                        { name: 'Bandra', city: 'Mumbai', img: 'https://images.unsplash.com/photo-1566552881560-0be134510105?w=300&q=80', count: '1.2K+' },
                        { name: 'Whitefield', city: 'Bengaluru', img: 'https://images.unsplash.com/photo-1590633390382-789a42be4075?w=300&q=80', count: '800+' },
                        { name: 'Hitech City', city: 'Hyderabad', img: 'https://images.unsplash.com/photo-1605146764387-0b196fa049d5?w=300&q=80', count: '650+' },
                        { name: 'Gurgaon', city: 'Delhi NCR', img: 'https://images.unsplash.com/photo-1581333100576-b73bbe92c2cb?w=300&q=80', count: '1.5K+' }
                    ].map((loc, i) => (
                        <Link to={`/listings?city=${loc.name}`} key={i} className="locality-card">
                            <img className="locality-bg" src={loc.img} alt={loc.name} />
                            <div className="locality-overlay">
                                <div className="locality-info">
                                    <h3>{loc.name}</h3>
                                    <p>{loc.count} Properties</p>
                                </div>
                            </div>
                        </Link>
                    ))}
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
