import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ watchList = [], setShowSearch }) => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={sticky ? 'header sticky' : 'header'}>
      <div className="container">
        <div className="logo">
          <Link to="/">MovieApp</Link>
        </div>

        <nav className="nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/Movies" onClick={() => setMenuOpen(false)}>Movies</Link>
          <Link to="/Register" onClick={() => setMenuOpen(false)}>Register</Link>
         
        </nav>

      </div>
    </header>
  );
};

export default Header;