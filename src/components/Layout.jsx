import React from 'react';
import Nav from './Nav.jsx';
import '../index.css';

export default function Layout({ children }) {
  return (
    <div className="site">
      <header className="site-header">
        <Nav />
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Jane Doe Therapy</p>
      </footer>
    </div>
  );
}
