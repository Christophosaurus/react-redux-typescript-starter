import React from 'react';

export const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__title">
        <h2>Footer</h2>
        <hr />
      </div>
      <div className="footer__content">
        <p>something</p>
        <p>Something else</p>
        <p>Something else again</p>
      </div>
    </footer>
  );
};