import React from 'react';

const Footer = () => {
  return (
    <footer className="footer_bg">
      <div className="container footer_content">
        <p>© {new Date().getFullYear()} A. Arthi. All rights reserved.</p>
        <p className="madeby">Crafted with ❣️ using React & SCSS</p>
      </div>
    </footer>
  );
};

export default Footer;
