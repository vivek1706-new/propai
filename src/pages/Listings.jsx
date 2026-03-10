import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, X, SlidersHorizontal, ChevronDown, CheckCircle2, LayoutGrid, List, Filter } from 'lucide-react';
import { properties } from '../utils/properties';
import PropertyCard from '../components/PropertyCard';
import ContactModal from '../components/ContactModal';

const Listings = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredProps, setFilteredProps] = useState(properties);
    const [searchQuery, setSearchQuery] = useState(searchParams.get('city') || '');
    const [filterType, setFilterType] = useState(searchParams.get('type') || 'all');
    const [budget, setBudget] = useState(100000000); // 10Cr
    const [selectedBhk, setSelectedBhk] = useState(searchParams.get('bhk') ? [parseInt(searchParams.get('bhk'))] : []);
    const [selectedLocalities, setSelectedLocalities] = useState(searchParams.get('locality') ? [searchParams.get('locality')] : []);
    const [modalData, setModalData] = useState(null);
    const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

    const localities = [...new Set(properties.map(p => p.locality))];

    useEffect(() => {
        let list = [...properties];

        if (filterType !== 'all') {
            list = list.filter(p => p.listingType === filterType);
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            list = list.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.locality.toLowerCase().includes(q) ||
                p.city.toLowerCase().includes(q)
            );
        }

        if (selectedBhk.length > 0) {
            list = list.filter(p => selectedBhk.includes(p.bhk));
        }

        if (selectedLocalities.length > 0) {
            list = list.filter(p => selectedLocalities.includes(p.locality));
        }

        list = list.filter(p => p.price <= budget);

        setFilteredProps(list);
    }, [filterType, searchQuery, budget, selectedBhk, selectedLocalities]);

    const openContact = (prop, mode) => {
        setModalData({ prop, mode });
    };

    const toggleBhk = (val) => {
        setSelectedBhk(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val]);
    };

    const toggleLocality = (loc) => {
        setSelectedLocalities(prev => prev.includes(loc) ? prev.filter(x => x !== loc) : [...prev, loc]);
    };

    return (
        <div className="listings-page">
            <div className="filter-chips-bar">
                <div className="filter-chips-scroll">
                    <button className={`filter-chip ${filterType === 'all' ? 'active' : ''}`} onClick={() => setFilterType('all')}>All Properties</button>
                    <button className={`filter-chip ${filterType === 'buy' ? 'active' : ''}`} onClick={() => setFilterType('buy')}>For Buy</button>
                    <button className={`filter-chip ${filterType === 'rent' ? 'active' : ''}`} onClick={() => setFilterType('rent')}>For Rent</button>

                    <div className="filter-chip-select-wrap">
                        <select
                            className="filter-chip-select"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        >
                            <option value="">Select City</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi NCR">Delhi NCR</option>
                            <option value="Pune">Pune</option>
                            <option value="Chennai">Chennai</option>
                        </select>
                        <ChevronDown size={12} className="select-arrow" />
                    </div>

                    {[1, 2, 3, 4].map(b => (
                        <button
                            key={b}
                            className={`filter-chip ${selectedBhk.includes(b) ? 'active' : ''}`}
                            onClick={() => toggleBhk(b)}
                        >{b} BHK</button>
                    ))}

                    <button className="filter-chip" onClick={() => setIsFilterPanelOpen(true)}>
                        <Filter size={14} /> More Filters
                    </button>
                </div>
            </div>

            <div className="listings-layout">
                <aside className="filter-sidebar">
                    <div className="filter-section">
                        <div className="filter-title">Locality / City</div>
                        <div className="search-input-wrap" style={{ marginBottom: '12px' }}>
                            <Search className="search-input-icon" size={14} />
                            <input
                                className="search-input"
                                type="text"
                                placeholder="Search locality..."
                                style={{ fontSize: '0.8rem', padding: '8px 8px 8px 30px' }}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="locality-filter" style={{ maxHeight: '150px', overflowY: 'auto' }}>
                            {localities.map(loc => (
                                <label key={loc} className="checkbox-item">
                                    <input
                                        type="checkbox"
                                        checked={selectedLocalities.includes(loc)}
                                        onChange={() => toggleLocality(loc)}
                                    />
                                    <span>{loc}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <div className="filter-title">Budget</div>
                        <div className="budget-display">Up to <span>₹{(budget / 10000000).toFixed(1)} Cr</span></div>
                        <input
                            type="range"
                            className="range-slider"
                            min="500000"
                            max="100000000"
                            step="500000"
                            value={budget}
                            onChange={(e) => setBudget(Number(e.target.value))}
                        />
                        <div className="budget-presets">
                            {[10, 50, 100, 250, 500].map(L => (
                                <button key={L} className="preset-btn" onClick={() => setBudget(L * 100000)}>₹{L}L</button>
                            ))}
                            <button className="preset-btn" onClick={() => setBudget(100000000)}>All</button>
                        </div>
                    </div>

                    <div className="filter-section">
                        <div className="filter-title">Property Type</div>
                        <div className="pill-group">
                            {['Flat', 'Villa', 'Plot', 'Commercial'].map(type => (
                                <button key={type} className="pill">
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                <div className="listings-content">
                    <div className="sort-bar">
                        <div className="results-info">
                            Showing <span>{filteredProps.length}</span> results for <span>{searchQuery || 'Everywhere'}</span>
                        </div>
                        <div className="sort-controls">
                            <span className="sort-label">Sort by:</span>
                            <select className="sort-select">
                                <option>Featured</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Recently Added</option>
                            </select>
                        </div>
                    </div>

                    <div className="active-filters">
                        {searchQuery && (
                            <span className="active-tag">{searchQuery} <button onClick={() => setSearchQuery('')}>×</button></span>
                        )}
                        {selectedBhk.map(b => (
                            <span key={b} className="active-tag">{b} BHK <button onClick={() => toggleBhk(b)}>×</button></span>
                        ))}
                        {selectedLocalities.map(loc => (
                            <span key={loc} className="active-tag">{loc} <button onClick={() => toggleLocality(loc)}>×</button></span>
                        ))}
                    </div>

                    {filteredProps.length > 0 ? (
                        <div className="cards-grid anim-fade-in">
                            {filteredProps.map(prop => (
                                <PropertyCard
                                    key={prop.id}
                                    property={prop}
                                    onContact={openContact}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <div className="empty-icon">📂</div>
                            <h3>No properties found</h3>
                            <p>Try adjusting your search or filters</p>
                            <button className="btn-outline" style={{ marginTop: '16px' }} onClick={() => { setFilterType('all'); setBudget(100000000); setSearchQuery(''); setSelectedBhk([]); setSelectedLocalities([]); }}>Reset All</button>
                        </div>
                    )}
                </div>
            </div>

            <ContactModal
                isOpen={!!modalData}
                onClose={() => setModalData(null)}
                property={modalData?.prop}
                mode={modalData?.mode}
            />
        </div>
    );
};

export default Listings;
