import React from 'react';

const Hero = () => {
  return (
    <section className="hero" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundImage: 'url("/images/ev_hero.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      marginTop: '-80px' // Adjust for fixed nav
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.9))',
        zIndex: 1
      }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="animate-fade-in" style={{ maxWidth: '700px' }}>
          <h1 style={{ fontSize: '4.5rem', marginBottom: '24px' }}>
            Powering the Future of <span className="electric-glow">EV Charging</span> Sales
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', marginBottom: '40px', maxWidth: '600px' }}>
            Sell, manage, and track electric vehicle charging stations with a powerful mobile sales platform designed for the modern EV business.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#demo" className="btn btn-primary">Request Demo</a>
            <a href="#contact" className="btn btn-outline">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
