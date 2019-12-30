import React from 'react';

export const Navbar: React.FC = (): JSX.Element => {
  return (
    <nav className="navbar">
      <div className="navbar__header">
        <h5>Navbar</h5>
      </div>
      <div className="navbar-nav nav-right">
        <div className="navbar__item">
          <a href="#somewhere">Item#1</a>
          <p></p>
        </div>
        <div className="navbar__item">
          <a href="#somewhere-else">Item#2</a>
        </div>
      </div>
    </nav>
  );
};