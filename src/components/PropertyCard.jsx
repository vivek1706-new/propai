import React from 'react';
import { BadgeCheck, Heart, MapPin, Tag } from 'lucide-react';

const PropertyCard = ({ property, onContact }) => {
    return (
        <div className={`property-card ${property.featured ? 'featured' : ''}`}>
            {property.featured && <div className="card-badge">PROMOTED</div>}

            <div className="card-image-wrap">
                <img src={property.image} alt={property.title} loading="lazy" />
                <button className="card-fav-btn" aria-label="Favorite">
                    <Heart size={18} />
                </button>
                <div className="card-tag-row">
                    {property.tags.map((tag, idx) => (
                        <span key={idx} className="card-tag">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="card-body">
                <div className="card-price-row">
                    <span className="card-price">{property.priceLabel}</span>
                    {property.verified && <BadgeCheck className="verified-icon" size={18} fill="#E13642" color="#fff" />}
                </div>

                <h3 className="card-title">{property.title}</h3>

                <div className="card-loc">
                    <MapPin size={14} />
                    {property.locality}, {property.city}
                </div>

                <div className="card-specs">
                    <div className="spec-item">
                        <span className="spec-val">{property.bhk ? `${property.bhk} BHK` : 'Plot'}</span>
                        <span className="spec-label">{property.propertyType}</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-val">{property.area}</span>
                        <span className="spec-label">sqft (built up)</span>
                    </div>
                    <div className="spec-item">
                        <span className="spec-val">{property.furnishing}</span>
                        <span className="spec-label">Furnishing</span>
                    </div>
                </div>

                <div className="card-footer">
                    <div className="advertiser-info">
                        <span className="adv-name">{property.advertiserName}</span>
                        <span className="adv-status">Owner · {property.postedDays}d ago</span>
                    </div>
                    <div className="card-actions">
                        <button className="btn-call" onClick={() => onContact(property, 'phone')}>View Phone</button>
                        <button className="btn-contact" onClick={() => onContact(property, 'contact')}>Contact Owner</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
