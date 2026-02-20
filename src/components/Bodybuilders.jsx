
import React from 'react';
import { motion } from 'framer-motion';

const legends = [
    {
        name: "Ronnie Coleman",
        title: "8x Mr. Olympia",
        image: "https://www.muscleandfitness.com/wp-content/uploads/2019/07/ronnie-coleman-treadmill.jpg?quality=86&strip=all",
        quote: "Yeah Buddy! Light weight baby!"
    },
    {
        name: "Arnold Schwarzenegger",
        title: "7x Mr. Olympia",
        image: "https://i.pinimg.com/736x/f9/ba/92/f9ba9292837f40149029a1b80267c134.jpg",
        quote: "The pump is one of the best feelings."
    },
    {
        name: "Jay Cutler",
        title: "4x Mr. Olympia",
        image: "https://i.ytimg.com/vi/q7_6L0T0m54/maxresdefault.jpg",
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
