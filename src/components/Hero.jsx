
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop") center/cover no-repeat',
            padding: '0 1rem'
        }}>
            <div className="container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', color: 'var(--text-main)', marginBottom: '1rem' }}
                >
                    PUSH <span style={{ color: 'var(--primary)' }}>HARDER</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}
                >
                    Welcome to Fitness Arena. Where legends are made and limits are broken. Join the elite community today.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <button style={{
                        background: 'var(--primary)',
                        color: 'black',
                        padding: '1rem 3rem',
                        fontSize: '1.2rem',
                        borderRadius: '50px',
                        textTransform: 'uppercase',
                        boxShadow: '0 0 20px rgba(204, 255, 0, 0.4)'
                    }}>
                        Get Started
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
