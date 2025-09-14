import React from 'react';
export default function Services(){
  const services = [
    {title: 'Social Media Marketing', desc: 'Strategy, content calendars, ads & community growth.'},
    {title: 'SEO', desc: 'Keyword research, on-page, technical SEO and local SEO.'},
    {title: 'Google Ads & Paid Campaigns', desc: 'Search, display, remarketing & performance optimization.'},
    {title: 'Website Development & Design', desc: 'Responsive websites, landing pages, e-commerce.'},
    {title: 'Content Creation', desc: 'Copywriting, visuals, videos and storytelling.'},
    {title: 'Email Marketing', desc: 'Automations, drip campaigns and lead nurturing.'},
    {title: 'Branding & Creative Strategy', desc: 'Positioning, visual identity and messaging.'}
  ];
  return (
    <section className="page">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map(s => (
          <div className="service-card" key={s.title}>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
