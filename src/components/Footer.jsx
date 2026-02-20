
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: '#050505', padding: '5rem 0 2rem', borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    <div>
                        <h3 style={{ color: 'var(--primary)', fontSize: '2rem', marginBottom: '1.5rem' }}>FITNESS ARENA</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                            We provide the best environment and training programs to help you reach your maximum potential.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Instagram size={24} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />
                            <Facebook size={24} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />
                            <Twitter size={24} style={{ cursor: 'pointer', color: 'var(--text-muted)' }} />
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>QUICK LINKS</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                            <a href="#home">Home</a>
                            <a href="#programs">Programs</a>
                            <a href="#bodybuilders">Legends</a>
                            <Link to="/login">Login</Link>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>CONTACT US</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                <Mail size={20} color="var(--primary)" />
                                <span>muhammadansariahmad323@gmail.com</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                <Phone size={20} color="var(--primary)" />
                                <span>03252207294</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}>
                                <MapPin size={20} color="var(--primary)" />
                                <span>Plot 123, Fitness Street, NYC</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    <p>© 2026 FITNESS ARENA. Developed by Muhammad Ansari Ahmad. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// Simple helper to allow Link in footer
import { Link } from 'react-router-dom';

export default Footer;
