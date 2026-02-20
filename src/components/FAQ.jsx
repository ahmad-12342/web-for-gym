
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    { q: "What are the gym timings?", a: "We are open from 6:00 AM to 11:00 PM every day including weekends." },
    { q: "Do you provide personal trainers?", a: "Yes, we have a team of certified professional trainers to guide you." },
    { q: "Can I get a custom diet plan?", a: "Absolutely! Our nutritionists can create a personalized diet plan based on your goals." },
    { q: "Is there a trial period?", a: "We offer a 3-day free trial for all new members so you can experience our facilities." }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section id="faq" style={{ padding: '5rem 0', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}>COMMON <span style={{ color: 'var(--primary)' }}>QUESTIONS</span></h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.2rem' }}>{faq.q}</h3>
                                {openIndex === i ? <Minus color="var(--primary)" /> : <Plus color="var(--primary)" />}
                            </div>
                            {openIndex === i && (
                                <p style={{ marginTop: '1rem', color: 'var(--text-muted)' }}>{faq.a}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
