import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  
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
          <Link to="/">Home</Link>
          <Link to="/Movies">Movies</Link>
          <Link to="/Register">Register</Link>
         
        </nav>

      </div>
    </header>
  );
};

export default Header;