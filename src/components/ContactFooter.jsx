
import React from 'react';
import { Mail, Send } from 'lucide-react';

const ContactFooter = () => {
    return (
        <section id="contact" style={{ padding: '5.5rem 0', background: 'var(--bg-card)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>

                    {/* Contact Form */}
                    <div className="glass" style={{ padding: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>GET IN <span style={{ color: 'var(--primary)' }}>TOUCH</span></h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <input type="text" placeholder="Your Name" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }} />
                            <input type="email" placeholder="Your Email" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }} />
                            <textarea placeholder="Your Message" rows="4" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }}></textarea>
                            <button style={{ background: 'var(--primary)', color: 'black', padding: '1rem', borderRadius: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                                SEND MESSAGE <Send size={18} />
                            </button>
                        </form>
                    </div>

                    {/* Newsletter & Map Placeholder */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>JOIN OUR NEWSLETTER</h3>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Get weekly fitness tips and special offers directly in your inbox.</p>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <input type="email" placeholder="Email Address" style={{ flex: 1, padding: '1rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border)', borderRadius: '8px', color: 'white' }} />
                                <button style={{ background: 'var(--primary)', color: 'black', padding: '0 1.5rem', borderRadius: '8px' }}><Mail /></button>
                            </div>
                        </div>

                        <div style={{ flex: 1, borderRadius: '15px', overflow: 'hidden', height: '300px', border: '1px solid var(--border)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11581!2d67.0!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e!2sKarachi!5e0!3m2!1sen!2spk!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactFooter;
