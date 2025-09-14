import React from 'react';
export default function Home(){
  return (
    <section className="hero">
      <div className="hero-inner">
        <h2>Your Growth Partner in the Digital World</h2>
        <p className="lead">At <strong>SPOT DIGITAL MARKETING</strong>, we help brands grow, connect and convert across the evolving digital landscape.</p>
        <ul className="bullets">
          <li>Social Media Marketing</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Google Ads & Paid Campaigns</li>
          <li>Website Development & Design</li>
          <li>Content Creation & Email Marketing</li>
          <li>Branding & Creative Strategy</li>
        </ul>
        <div className="hero-cta">
          <a href="/contact" className="btn">Get a Free Consultation</a>
        </div>
      </div>
    </section>
  );
}
