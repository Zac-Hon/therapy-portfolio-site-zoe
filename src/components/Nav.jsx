import React from 'react';
import { Link } from 'react-router-dom';
import settings from '../../content/settings.json';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="nav-brand">{settings.therapist_name}</span>
        <span className="nav-location">{settings.location}</span>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <a href={`mailto:${settings.email}`}>Contact</a>
      </div>
    </nav>
  );
}
