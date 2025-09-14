import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const loc = useLocation();
  return (
    <header className="site-header">
      <div className="logo">
        <img src="/assets/logo.png" alt="Spot Digital Logo" />
        <div className="brand">
          <h1>SPOT</h1>
          <div className="tag">Digital Marketing</div>
        </div>
      </div>
      <nav className="nav">
        <Link className={loc.pathname==='/'?'active':''} to="/">Home</Link>
        <Link className={loc.pathname==='/about'?'active':''} to="/about">About</Link>
        <Link className={loc.pathname==='/services'?'active':''} to="/services">Services</Link>
        <Link className={loc.pathname==='/contact'?'active':''} to="/contact">Contact</Link>
      </nav>
    </header>
  );
}
