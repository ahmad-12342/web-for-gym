
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BMICalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState('');

    const calculateBMI = (e) => {
        e.preventDefault();
        if (weight > 0 && height > 0) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBmi(bmiValue);

            if (bmiValue < 18.5) {
                setMessage('Underweight - Time to bulk up! 💪');
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setMessage('Healthy Weight - Keep it up! ✨');
            } else {
                setMessage('Overweight - Join us to get in shape! 🔥');
            }
        }
    };

    return (
        <section id="bmi" style={{ padding: '5rem 0', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>CALCULATE YOUR <span style={{ color: 'var(--primary)' }}>BMI</span></h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                        Our BMI calculator is a simple tool that uses your height and weight to determine if your weight is in a healthy range.
                    </p>

                    <form onSubmit={calculateBMI} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <input
                                type="number"
                                placeholder="Weight (kg)"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                style={{ flex: '1', padding: '1rem', background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white', outline: 'none' }}
                            />
                            <input
                                type="number"
                                placeholder="Height (cm)"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                style={{ flex: '1', padding: '1rem', background: 'var(--glass)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white', outline: 'none' }}
                            />
                        </div>
                        <button type="submit" style={{
                            background: 'var(--primary)',
                            color: 'black',
                            padding: '1rem',
                            borderRadius: '8px',
                            fontSize: '1.1rem',
                            boxShadow: '0 5px 15px rgba(204, 255, 0, 0.2)'
                        }}>
                            CALCULATE NOW
                        </button>
                    </form>

                    {bmi && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass"
                            style={{ marginTop: '2rem', padding: '1.5rem', textAlign: 'center' }}
                        >
                            <h3 style={{ fontSize: '1.5rem' }}>Your BMI: <span style={{ color: 'var(--primary)' }}>{bmi}</span></h3>
                            <p style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>{message}</p>
                        </motion.div>
                    )}
                </div>

                <div style={{ flex: '1', minWidth: '300px', borderRadius: '20px', overflow: 'hidden' }}>
                    <img
                        src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
                        alt="Gym Training"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BMICalculator;
