
import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isGymOpen = () => {
    const hours = time.getHours();
    return hours >= 6 && hours < 23; // Open 6 AM to 11 PM
  };

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      zIndex: 1000,
      padding: '0.8rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>
          <Logo size={32} />
          <span className="brand">FITNESS ARENA</span>
        </Link>
        <div style={{ fontSize: '0.7rem', display: 'flex', gap: '10px', marginTop: '2px', color: 'var(--text-muted)' }}>
          <span>{time.toLocaleTimeString()}</span>
          <span style={{ color: isGymOpen() ? '#00ff00' : '#ff4444', fontWeight: 'bold' }}>
            ● {isGymOpen() ? 'OPEN NOW' : 'CLOSED'}
          </span>
        </div>
      </div>

      <div className="desktop-menu" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <a href="#home" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Home</a>
        <a href="#programs" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Programs</a>
        <a href="#schedule" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Schedule</a>
        <a href="#bmi" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>BMI</a>
        <a href="#pricing" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Pricing</a>
        <a href="#gallery" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Gallery</a>
        <a href="#bodybuilders" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Legends</a>
        <a href="#reviews" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>Reviews</a>
        <a href="#faq" style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>FAQ</a>
        <Link to="/login" style={{
          background: 'var(--primary)',
          color: 'black',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          fontWeight: 'bold',
          fontSize: '0.9rem'
        }}>Login</Link>
      </div>

      {/* Mobile Toggle */}
      <div className="mobile-toggle" style={{ display: 'none', color: 'var(--text-main)' }} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
