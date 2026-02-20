
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
    {
        name: "Basic",
        price: "25",
        features: ["Gym Access", "Basic Equipment", "Locker Room", "1 Month Validity"]
    },
    {
        name: "Pro",
        price: "50",
        features: ["All Basic Features", "Personal Trainer", "Diet Plan", "Yoga Classes"],
        recommended: true
    },
    {
        name: "Elite",
        price: "99",
        features: ["All Pro Features", "VIP Lounge", "Spa & Sauna", "Unlimited Drinks"]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" style={{ padding: '5rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>MEMBERSHIP <span style={{ color: 'var(--primary)' }}>PLANS</span></h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="glass"
                            style={{
                                padding: '3rem 2rem',
                                textAlign: 'center',
                                position: 'relative',
                                border: plan.recommended ? '2px solid var(--primary)' : '1px solid var(--border)'
                            }}
                        >
                            {plan.recommended && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-15px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'var(--primary)',
                                    color: 'black',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold'
                                }}>RECOMMENDED</div>
                            )}
                            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{plan.name}</h3>
                            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                                ${plan.price}<span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>/mo</span>
                            </div>
                            <ul style={{ listStyle: 'none', textAlign: 'left', marginBottom: '2rem' }}>
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem', color: 'var(--text-muted)' }}>
                                        <Check size={18} color="var(--primary)" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button style={{
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '8px',
                                background: plan.recommended ? 'var(--primary)' : 'transparent',
                                color: plan.recommended ? 'black' : 'white',
                                border: '1px solid var(--primary)',
                                fontWeight: 'bold'
                            }}>
                                CHOOSE PLAN
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
