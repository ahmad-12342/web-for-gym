
import React, { useState } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 'bold' }}>
        <Dumbbell size={32} />
        <span className="brand">FITNESS ARENA</span>
      </Link>

      {/* Desktop Menu */}
      <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <Link to="/" style={{ color: 'var(--text-main)', fontWeight: '500' }}>Home</Link>
        <a href="#programs" style={{ color: 'var(--text-main)', fontWeight: '500' }}>Programs</a>
        <a href="#bodybuilders" style={{ color: 'var(--text-main)', fontWeight: '500' }}>Legends</a>
        <Link to="/login" style={{ 
          background: 'var(--primary)', 
          color: 'black', 
          padding: '0.5rem 1.5rem', 
          borderRadius: '5px',
          fontWeight: 'bold'
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
