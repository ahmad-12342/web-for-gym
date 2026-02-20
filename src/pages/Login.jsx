
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'url("https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop") center/cover no-repeat',
            position: 'relative'
        }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)' }}></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass"
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    padding: '3rem',
                    zIndex: 1,
                    textAlign: 'center'
                }}
            >
                <h1 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '1rem' }}>LOGIN</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Welcome back to Fitness Arena</p>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
                        LOG IN
                    </button>
                </form>

                <p style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>
                    Don't have an account? <Link to="#" style={{ color: 'var(--primary)' }}>Sign Up</Link>
                </p>
                <Link to="/" style={{ display: 'block', marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Back to Home</Link>
            </motion.div>
        </div>
    );
};

export default Login;
