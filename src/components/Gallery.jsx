
import React from 'react';
import { motion } from 'framer-motion';

const images = [
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574673130244-c707e9d893f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1887&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?q=80&w=1988&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596357399117-eddd53c42a5a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop"
];

const Gallery = () => {
    return (
        <section id="gallery" style={{ padding: '5rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>OUR <span style={{ color: 'var(--primary)' }}>GALLERY</span></h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem'
                }}>
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            style={{ borderRadius: '15px', overflow: 'hidden', height: '300px' }}
                        >
                            <img src={img} alt="Gym" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
