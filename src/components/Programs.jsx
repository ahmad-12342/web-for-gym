
import React from 'react';
import { Zap, Heart, Target, TrendingUp } from 'lucide-react';

const programs = [
    { icon: <Zap color="var(--primary)" />, title: "Strength Training", desc: "Build massive muscles with our expert guidance and heavy iron." },
    { icon: <Heart color="var(--primary)" />, title: "Cardio Excellence", desc: "Boost your endurance and heart health with modern equipment." },
    { icon: <Target color="var(--primary)" />, title: "Personal Coaching", desc: "One-on-one sessions tailored to your specific fitness goals." },
    { icon: <TrendingUp color="var(--primary)" />, title: "Weight Loss", desc: "Transform your physique with our proven weight management plans." }
];

const Programs = () => {
    return (
        <section id="programs" style={{ padding: '5rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>OUR <span style={{ color: 'var(--primary)' }}>PROGRAMS</span></h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem'
                }}>
                    {programs.map((prog, index) => (
                        <div key={index} className="glass" style={{ padding: '2.5rem', transition: '0.3s' }}>
                            <div style={{ marginBottom: '1.5rem' }}>{prog.icon}</div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{prog.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{prog.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
