
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
            position: 'relative'
        }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.85)' }}></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass"
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    padding: '3rem',
                    zIndex: 1,
                    textAlign: 'center'
                }}
            >
                <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>SIGN UP</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Start your fitness journey today</p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                    <div style={{ position: 'relative' }}>
                        <User style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Mail style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Phone style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Lock style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem 1rem 1rem 3rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border)',
                                borderRadius: '8px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <button style={{
                        background: 'var(--primary)',
                        color: 'black',
                        padding: '1rem',
                        borderRadius: '8px',
                        fontSize: '1.1rem',
                        marginTop: '1rem',
                        boxShadow: '0 5px 15px rgba(204, 255, 0, 0.3)'
                    }}>
                        CREATE ACCOUNT
                    </button>
                </form>

                <p style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
                    Already have an account? <Link to="/login" style={{ color: 'var(--primary)' }}>Log In</Link>
                </p>
                <Link to="/" style={{ display: 'block', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Back to Home</Link>
            </motion.div>
        </div>
    );
};

export default Signup;
