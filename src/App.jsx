import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Contacts from './pages/Contacts';
import './index.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <main className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/listings" element={<Listings />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </main>
                <BottomNav />
            </div>
        </Router>
    );
}

export default App;
