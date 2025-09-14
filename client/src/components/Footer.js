import React from 'react';
export default function Footer(){
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} SPOT DIGITAL MARKETING</div>
      <div className="contact-mini">
        <a href="mailto:spot99digital@gmail.com">spot99digital@gmail.com</a> · <a href="tel:7721908440">7721908440</a>
      </div>
    </footer>
  );
}
