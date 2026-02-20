
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Ahmad Ansari",
        review: "This gym changed my life! The mentors and the vibe here are unmatched.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1506794778242-aff80849e756?q=80&w=1887&auto=format&fit=crop"
    },
    {
        name: "John Doe",
        review: "The equipment is top-notch and the BMI calculator is so helpful.",
        stars: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
    },
    {
        name: "Sara Khan",
        review: "Best transformation center. I lost 10kg in 3 months successfully.",
        stars: 4,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    }
];

const Testimonials = () => {
    return (
        <section style={{ padding: '5rem 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>CLIENT <span style={{ color: 'var(--primary)' }}>REVIEWS</span></h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {reviews.map((rev, index) => (
                        <div key={index} className="glass" style={{ padding: '2rem', textAlign: 'center' }}>
                            <img
                                src={rev.image}
                                alt={rev.name}
                                style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '1.5rem', border: '2px solid var(--primary)' }}
                            />
                            <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>"{rev.review}"</p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '1rem' }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill={i < rev.stars ? "var(--primary)" : "none"} color="var(--primary)" />
                                ))}
                            </div>
                            <h4 style={{ fontSize: '1.2rem', color: 'var(--text-main)' }}>{rev.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
