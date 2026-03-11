import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Mobile Sales Dashboard',
      desc: 'Track leads, orders, and installations from one clinical interface.',
      icon: '📱'
    },
    {
      title: 'EV Charger Catalog',
      desc: 'Showcase models with real-time specs and dynamic pricing.',
      icon: '⚡'
    },
    {
      title: 'Sales Analytics',
      desc: 'Instant insights into revenue, conversion rates, and performance.',
      icon: '📈'
    },
    {
      title: 'Instant Quotations',
      desc: 'Generate and share professional quotes in under 30 seconds.',
      icon: '📑'
    }
  ];

  return (
    <section id="features" style={{ backgroundColor: '#050505' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }} className="text-gradient">Engineered for Performance</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Seamlessly manage your entire sales cycle in one platform.</p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {features.map((f, i) => (
            <div key={i} className="glass-card">
              <div style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{f.icon}</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
