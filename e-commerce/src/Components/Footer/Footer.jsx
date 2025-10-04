import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Discover the latest trends in fashion with curated styles for every season.</p>
        </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Trendify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;