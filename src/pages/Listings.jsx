import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Search, MapPin, X, SlidersHorizontal } from 'lucide-react';
import { properties } from '../utils/properties';
import PropertyCard from '../components/PropertyCard';
import ContactModal from '../components/ContactModal';

const Listings = () => {
    const [searchParams] = useSearchParams();
    const [filteredProps, setFilteredProps] = useState(properties);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterType, setFilterType] = useState(searchParams.get('type') || 'all');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    useEffect(() => {
        let list = [...properties];

        // Filter by type (buy/rent)
        if (filterType !== 'all') {
            list = list.filter(p => p.listingType === filterType);
        }

        // Filter by search query
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            list = list.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.locality.toLowerCase().includes(q) ||
                p.city.toLowerCase().includes(q)
            );
        }

        setFilteredProps(list);
    }, [filterType, searchQuery]);

    const openContact = (prop, mode) => {
        setModalData({ prop, mode });
    };

    return (
        <div className="listings-page">
            <div className="listings-header">
                <div className="listings-hero-content">
                    <h1>Dream Home <span>Finder</span></h1>
                    <p>{filteredProps.length} properties found in India</p>
                </div>

                <div className="listings-filters">
                    <div className="filter-tabs">
                        <button
                            className={`filter-tab ${filterType === 'all' ? 'active' : ''}`}
                            onClick={() => setFilterType('all')}
                        >All</button>
                        <button
                            className={`filter-tab ${filterType === 'buy' ? 'active' : ''}`}
                            onClick={() => setFilterType('buy')}
                        >Buy</button>
                        <button
                            className={`filter-tab ${filterType === 'rent' ? 'active' : ''}`}
                            onClick={() => setFilterType('rent')}
                        >Rent</button>
                    </div>

                    <div className="listings-search-bar">
                        <div className="search-bar-inner">
                            <Search size={18} />
                            <input
                                type="text"
                                placeholder="Locality, City..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="listings-content">
                {filteredProps.length > 0 ? (
                    <div className="property-grid">
                        {filteredProps.map(prop => (
                            <PropertyCard
                                key={prop.id}
                                property={prop}
                                onContact={openContact}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="no-props">
                        <X size={48} />
                        <h3>No Properties Found</h3>
                        <p>Try changing your search or filters</p>
                    </div>
                )}
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
