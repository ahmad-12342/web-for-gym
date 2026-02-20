
import React from 'react';
import { motion } from 'framer-motion';
import legendPic from '../assets/legend1.jpg';

const legends = [
    {
        name: "Fitness Elite",
        title: "Arena Champion",
        image: legendPic,
        quote: "Your only limit is you. Push beyond boundaries."
    },
    {
        name: "Arnold Schwarzenegger",
        title: "7x Mr. Olympia",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        quote: "The pump is one of the best feelings."
    },
    {
        name: "Jay Cutler",
        title: "4x Mr. Olympia",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
        quote: "Victory is always possible."
    }
];

const Bodybuilders = () => {
    return (
        <section id="bodybuilders" style={{ padding: '5rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem', color: 'var(--primary)' }}>THE LEGENDS</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {legends.map((legend, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{ overflow: 'hidden', padding: '1rem' }}
                        >
                            <img src={legend.image} alt={legend.name} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px' }} />
                            <div style={{ padding: '1.5rem 0' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{legend.name}</h3>
                                <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1rem' }}>{legend.title}</p>
                                <p style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"{legend.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Bodybuilders;
