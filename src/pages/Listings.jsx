import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, X, SlidersHorizontal, ChevronDown, CheckCircle2, LayoutGrid, List } from 'lucide-react';
import { properties } from '../utils/properties';
import PropertyCard from '../components/PropertyCard';
import ContactModal from '../components/ContactModal';

const Listings = () => {
    const [searchParams] = useSearchParams();
    const [filteredProps, setFilteredProps] = useState(properties);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState(searchParams.get('type') || 'all');
    const [budget, setBudget] = useState(50000000); // 5Cr
    const [modalData, setModalData] = useState(null);

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

        list = list.filter(p => p.price <= budget);

        setFilteredProps(list);
    }, [filterType, searchQuery, budget]);

    const openContact = (prop, mode) => {
        setModalData({ prop, mode });
    };

    return (
        <div className="listings-page">
            <div className="filter-chips-bar">
                <div className="filter-chips-scroll">
                    <button className={`filter-chip ${filterType === 'all' ? 'active' : ''}`} onClick={() => setFilterType('all')}>All Properties</button>
                    <button className={`filter-chip ${filterType === 'buy' ? 'active' : ''}`} onClick={() => setFilterType('buy')}>For Buy</button>
                    <button className={`filter-chip ${filterType === 'rent' ? 'active' : ''}`} onClick={() => setFilterType('rent')}>For Rent</button>
                    <button className="filter-chip">Budget: ₹{(budget / 10000000).toFixed(1)}Cr <ChevronDown size={14} /></button>
                    <button className="filter-chip">Property Type <ChevronDown size={14} /></button>
                    <button className="filter-chip">BHK <ChevronDown size={14} /></button>
                </div>
            </div>

            <div className="listings-layout">
                <aside className="filter-sidebar">
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
                            {[10, 50, 100, 200, 500].map(L => (
                                <button key={L} className="preset-btn" onClick={() => setBudget(L * 100000)}>₹{L}L</button>
                            ))}
                        </div>
                    </div>

                    <div className="filter-section">
                        <div className="filter-title">Property Type</div>
                        <div className="locality-filter">
                            {['Flat', 'Villa', 'Plot', 'Penthouse'].map(type => (
                                <label key={type} className="checkbox-item">
                                    <input type="checkbox" defaultChecked />
                                    <span>{type}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </aside>

                <div className="listings-content">
                    <div className="sort-bar">
                        <div className="results-info">
                            Showing <span>{filteredProps.length}</span> results for you
                        </div>
                        <div className="sort-controls">
                            <span className="sort-label">Sort by:</span>
                            <select className="sort-select">
                                <option>Relevance</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Recently Added</option>
                            </select>
                        </div>
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
                            <p>Try adjusting your filters or search area</p>
                            <button className="btn-outline" style={{ marginTop: '16px' }} onClick={() => { setFilterType('all'); setBudget(100000000); setSearchQuery(''); }}>Reset All Filters</button>
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
