import React from 'react';

const UVP = () => {
  return (
    <section id="uvp" style={{ backgroundColor: 'var(--bg-dark)', borderTop: '1px solid #111' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', gap: '80px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
              All-in-one <span className="electric-glow">Sales Engine</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '32px' }}>
              Perfect for EV charging companies, dealerships, and distributors. EVCharge Sales App helps you scale from lead to installation without the friction.
            </p>
            <ul style={{ listStyle: 'none', color: 'var(--text-main)', fontSize: '1.1rem' }}>
              <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--primary)' }}>✔</span> Increase EV charger sales
              </li>
              <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--primary)' }}>✔</span> Manage field sales teams
              </li>
              <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ color: 'var(--primary)' }}>✔</span> Smart analytics for decision making
              </li>
            </ul>
          </div>
          <div style={{ flex: '1', minWidth: '300px', textAlign: 'center' }}>
            <img 
              src="/images/ev_app.png" 
              alt="EVCharge App Mockup" 
              style={{ width: '100%', maxWidth: '450px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UVP;
