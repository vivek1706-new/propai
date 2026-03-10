import React from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';

const PropertyCard = ({ property, onContact }) => {
    return (
        <div className={`property-card anima-fade-in ${property.featured ? 'featured' : ''}`}>
            {property.featured && <div className="featured-ribbon">⭐ Featured</div>}

            <div className="card-image-wrap">
                <img className="card-img" src={property.image} alt={property.title} loading="lazy" />
                <div className="card-badge badge-sale">
                    {property.listingType === 'buy' ? 'For Sale' : 'For Rent'}
                </div>
                <div className="card-img-overlay">
                    <button className="wishlist-btn" title="Add to Shortlist">❤</button>
                </div>
            </div>

            <div className="card-body">
                <div className="card-price-row">
                    <span className="card-price">{property.priceLabel}</span>
                    <span className="card-psf">₹{property.pricePerSqft.toLocaleString('en-IN')}/sqft</span>
                </div>

                <h3 className="card-title">{property.title}</h3>

                <div className="card-location">
                    <MapPin size={12} />
                    {property.locality}, {property.city}
                </div>

                <div className="card-chips">
                    <div className="chip">🏠 {property.bhk ? `${property.bhk} BHK` : 'Plot'}</div>
                    <div className="chip">📏 {property.area} sqft</div>
                    <div className="chip">✨ {property.furnishing}</div>
                </div>

                <div className="card-tags">
                    {property.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="card-footer">
                    <div className="card-footer-meta">
                        {property.verified && (
                            <span className="verified-badge">
                                <CheckCircle2 size={12} /> Verified
                            </span>
                        )}
                        <span className="card-posted">{property.postedDays}d ago</span>
                    </div>

                    <div className="card-action-btns">
                        <button className="view-phone-btn" onClick={() => onContact(property, 'phone')}>
                            <Phone size={14} /> View Phone
                        </button>
                        <button className="contact-owner-btn" onClick={() => onContact(property, 'contact')}>
                            <Mail size={14} /> Contact Owner
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
