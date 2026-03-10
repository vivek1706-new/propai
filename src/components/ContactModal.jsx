import React, { useState, useEffect, useRef } from 'react';
import { X, User, Phone, Mail, CheckCircle, Loader2 } from 'lucide-react';

const ContactModal = ({ isOpen, onClose, property, mode }) => {
    const [step, setStep] = useState('form'); // 'form', 'otp', 'success'
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [token, setToken] = useState(null);
    const [recordId, setRecordId] = useState(null);
    const [serverMsg, setServerMsg] = useState('');

    const otpRefs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

    useEffect(() => {
        if (isOpen) {
            setStep('form');
            setFormData({ name: '', phone: '', email: '' });
            setOtp(['', '', '', '', '', '']);
            setError('');
            setServerMsg('');
        }
    }, [isOpen]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.name) return setError('Please enter your full name');
        if (!/^[6-9]\d{9}$/.test(formData.phone)) return setError('Enter a valid 10-digit Indian mobile number');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return setError('Enter a valid email address');

        setLoading(true);
        try {
            const resp = await fetch('/api/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    propertyId: property?.id,
                    propertyTitle: property?.title,
                    city: property?.city,
                    locality: property?.locality,
                    mode: mode
                })
            });

            const data = await resp.json();
            if (!resp.ok) throw new Error(data.error || 'Failed to send OTP');

            setToken(data.token);
            setRecordId(data.recordId);
            setServerMsg(data.message);
            setStep('otp');
            setTimeout(() => otpRefs[0].current?.focus(), 200);
        } catch (err) {
            setError(err.message || 'Failed to send OTP. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleOtpChange = (index, value) => {
        const val = value.replace(/\D/g, '');
        if (!val && value !== '') return;

        const newOtp = [...otp];
        newOtp[index] = val.slice(-1);
        setOtp(newOtp);

        if (newOtp[index] && index < 5) {
            otpRefs[index + 1].current?.focus();
        }

        if (newOtp.every(digit => digit !== '')) {
            verifyOtp(newOtp.join(''));
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            otpRefs[index - 1].current?.focus();
        }
    };

    const verifyOtp = async (enteredOtp) => {
        setLoading(true);
        setError('');
        try {
            const resp = await fetch('/api/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token,
                    enteredOtp,
                    recordId
                })
            });

            const data = await resp.json();
            if (!resp.ok) throw new Error(data.error || 'Invalid OTP');

            setStep('success');
        } catch (err) {
            setError(err.message || 'Incorrect OTP. Please try again.');
            setOtp(['', '', '', '', '', '']);
            otpRefs[0].current?.focus();
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div className="modal-box">
                <div className="modal-handle"></div>
                <button className="modal-close" onClick={onClose}>
                    <X size={20} />
                </button>

                {step === 'form' && (
                    <div className="modal-step anim-fade-in">
                        <div className="modal-icon-wrap modal-icon-blue">
                            <User size={24} />
                        </div>
                        <h2 className="modal-title">{mode === 'phone' ? 'View Phone Number' : 'Contact the Owner'}</h2>
                        <p className="modal-subtitle">Fill in your details -- the advertiser will be able to see them</p>

                        <form className="modal-form" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label className="form-label">Full Name <span className="form-req">*</span></label>
                                <input
                                    className="form-input"
                                    type="text"
                                    placeholder="e.g. Rahul Sharma"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Mobile Number <span className="form-req">*</span></label>
                                <div className="phone-input-wrap">
                                    <span className="phone-prefix">🇮🇳 +91</span>
                                    <input
                                        className="form-input"
                                        type="tel"
                                        maxLength="10"
                                        placeholder="Mobile Number"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address <span className="form-req">*</span></label>
                                <input
                                    className="form-input"
                                    type="email"
                                    placeholder="e.g. rahul@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            {error && <div className="form-error-msg">{error}</div>}

                            <button className="btn-primary-modal" type="submit" disabled={loading}>
                                {loading ? <Loader2 className="anim-spin" size={20} /> : 'Send OTP'}
                            </button>
                        </form>
                    </div>
                )}

                {step === 'otp' && (
                    <div className="modal-step anim-fade-in">
                        <div className="modal-icon-wrap modal-icon-red">
                            <Mail size={24} />
                        </div>
                        <h2 className="modal-title">Verify OTP</h2>
                        <p className="modal-subtitle">{serverMsg || `📧 OTP sent to ${formData.email}. Please check your inbox.`}</p>

                        <div className="otp-container">
                            {otp.map((digit, idx) => (
                                <input
                                    key={idx}
                                    ref={otpRefs[idx]}
                                    className="otp-box"
                                    type="tel"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(idx, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(idx, e)}
                                    disabled={loading}
                                />
                            ))}
                        </div>

                        {error && <div className="form-error-msg" style={{ textAlign: 'center', marginTop: '12px' }}>{error}</div>}

                        <div className="otp-footer">
                            <p>Didn't receive OTP? <button className="btn-text" onClick={handleFormSubmit} disabled={loading}>Resend OTP</button></p>
                        </div>
                    </div>
                )}

                {step === 'success' && (
                    <div className="modal-step anim-fade-in" style={{ textAlign: 'center' }}>
                        <div className="modal-icon-wrap modal-icon-green" style={{ margin: '0 auto 20px' }}>
                            <CheckCircle size={32} />
                        </div>
                        <h2 className="modal-title">Success!</h2>
                        <p className="modal-subtitle">The owner has been notified. They will contact you shortly.</p>

                        {mode === 'phone' && (
                            <div className="phone-reveal-box">
                                <div className="reveal-label">Owner's Phone Number</div>
                                <div className="reveal-val">{property?.advertiserPhone}</div>
                                <a href={`tel:${property?.advertiserPhone}`} className="btn-call-large">Call Now</a>
                            </div>
                        )}

                        <button className="btn-primary-modal" style={{ marginTop: '20px' }} onClick={onClose}>Done</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContactModal;
