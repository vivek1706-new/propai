import React, { useState, useEffect } from 'react';
import { Search, RefreshCw, Trash2, Download, Table, List, Users } from 'lucide-react';

const Contacts = () => {
    const SUPABASE_URL = 'https://nzgfrebvpwvgrdcwkbld.supabase.co';
    const SUPABASE_ANON_KEY = 'sb_publishable_Sb6pjsCDtvV6HwXImrKF_A_N0IKULmG';

    const [allContacts, setAllContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const loadContacts = async () => {
        setLoading(true);
        setError('');
        try {
            const resp = await fetch(`${SUPABASE_URL}/rest/v1/contacts?select=*&order=created_at.desc`, {
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                }
            });

            if (!resp.ok) {
                const err = await resp.json();
                throw new Error(err.message || 'Failed to fetch from Supabase');
            }

            const data = await resp.json();
            setAllContacts(data);
            setFilteredContacts(data);
        } catch (err) {
            console.error('Fetch error:', err);
            setError(err.message || 'Error loading contacts');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadContacts();
    }, []);

    useEffect(() => {
        const q = searchQuery.toLowerCase().trim();
        const list = q
            ? allContacts.filter(c =>
                c.name.toLowerCase().includes(q) ||
                (c.phone || '').includes(q) ||
                (c.email || '').toLowerCase().includes(q) ||
                (c.property_title || '').toLowerCase().includes(q)
            )
            : allContacts;
        setFilteredContacts(list);
    }, [searchQuery, allContacts]);

    const clearContacts = async () => {
        if (!confirm('Delete all contact records from Supabase? This cannot be undone.')) return;

        try {
            const resp = await fetch(`${SUPABASE_URL}/rest/v1/contacts?id=neq.00000000-0000-0000-0000-000000000000`, {
                method: 'DELETE',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                }
            });

            if (!resp.ok) throw new Error('Delete failed');

            setAllContacts([]);
        } catch (err) {
            alert('❌ Error clearing contacts: ' + err.message);
        }
    };

    const exportCSV = () => {
        if (!allContacts.length) { alert('No contacts to export.'); return; }
        const header = ['#', 'Name', 'Phone', 'Email', 'Property', 'OTP', 'Mode', 'Verified', 'Timestamp'];
        const rows = allContacts.map((c, i) => [
            i + 1, c.name, '+91' + c.phone, c.email || '', c.property_title || '',
            c.otp || '', c.mode, c.verified ? 'Yes' : 'No', c.created_at
        ]);
        const csv = [header, ...rows].map(r => r.map(f => `"${String(f).replace(/"/g, '""')}"`).join(',')).join('\n');
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = 'nestfinder_contacts.csv'; a.click();
        URL.revokeObjectURL(url);
    };

    const total = allContacts.length;
    const verified = allContacts.filter(c => c.verified).length;

    return (
        <div className="admin-page">
            <div className="admin-hero anim-fade-in">
                <h1>📋 Contacts <span>Dashboard</span></h1>
                <p>All buyer enquiries stored with OTP verification status</p>
            </div>

            <div className="admin-content">
                <div className="admin-stats">
                    <div className="admin-stat-card">
                        <span className="stat-num">{total}</span>
                        <span className="stat-label">Total Enquiries</span>
                    </div>
                    <div className="admin-stat-card">
                        <span className="stat-num" style={{ color: '#27ae60' }}>{verified}</span>
                        <span className="stat-label">Verified</span>
                    </div>
                    <div className="admin-stat-card">
                        <span className="stat-num" style={{ color: '#e67e22' }}>{total - verified}</span>
                        <span className="stat-label">Pending</span>
                    </div>
                </div>

                <div className="admin-actions">
                    <div className="admin-search">
                        <Search size={14} />
                        <input
                            type="text"
                            placeholder="Search name, email, property..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <button className="admin-refresh-btn" onClick={loadContacts} disabled={loading}>
                        <RefreshCw className={loading ? 'anim-spin' : ''} size={14} />
                        Refresh
                    </button>

                    <button className="admin-clear-btn" onClick={clearContacts} disabled={loading}>
                        <Trash2 size={14} />
                        Clear All
                    </button>

                    <button className="admin-export-btn" onClick={exportCSV}>
                        <Download size={14} style={{ marginRight: '4px' }} />
                        Export CSV
                    </button>
                </div>

                <div className="table-wrap">
                    <table id="contacts-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Property</th>
                                <th>OTP</th>
                                <th>Mode</th>
                                <th>Status</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && allContacts.length === 0 ? (
                                <tr className="no-data-row"><td colSpan="9">⏳ Loading from Supabase...</td></tr>
                            ) : error ? (
                                <tr className="no-data-row"><td colSpan="9" style={{ color: 'var(--primary)' }}>⚠️ {error}</td></tr>
                            ) : filteredContacts.length === 0 ? (
                                <tr className="no-data-row"><td colSpan="9">📭 No contacts yet.</td></tr>
                            ) : (
                                filteredContacts.map((c, i) => {
                                    const time = new Date(c.created_at);
                                    const timeStr = time.toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
                                    const title = (c.property_title || '').length > 30 ? c.property_title.slice(0, 30) + '...' : c.property_title || '--';

                                    return (
                                        <tr key={c.id}>
                                            <td><strong>{i + 1}</strong></td>
                                            <td><strong>{c.name}</strong></td>
                                            <td>+91 {c.phone}</td>
                                            <td>{c.email || '--'}</td>
                                            <td title={c.property_title}>{title}</td>
                                            <td><span className="otp-code">{c.otp || '--'}</span></td>
                                            <td>{c.mode === 'phone' ? '📞 Phone' : '✉ Contact'}</td>
                                            <td>
                                                <span className={`status-badge ${c.verified ? 'status-verified' : 'status-pending'}`}>
                                                    {c.verified ? '✅ Verified' : '⏳ Pending'}
                                                </span>
                                            </td>
                                            <td style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>{timeStr}</td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
