import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import UVP from './components/UVP';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // 💡 FOR DEMO: If you haven't deployed the Apps Script yet, it will run in "Demo Mode"
    // To enable real spreadsheet storage, replace 'DEMO' with your script URL.
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzsls2bGEJB6hGy86-VaQJz2vuwGpTHD2pLiQt7swBGCZ4LBKPQ15Cf_3s6zisEBLotTA/exec'; 

    try {
      if (SCRIPT_URL === 'DEMO') {
        // Simulating a network delay for demo effect
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('DEMO MODE: Lead Data:', formData);
      } else {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
      }
      
      setStatus('Lead Captured! Our team will contact you shortly.');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus('Submission failed. Please check your console.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '24px 0',
        zIndex: 100,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-1px' }}>
            EVCHARGE<span style={{ color: 'var(--primary)' }}>.</span>
          </div>
          <div className="nav-menu" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            <a href="#features" className="nav-link" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', opacity: 0.7 }}>Features</a>
            <a href="#uvp" className="nav-link" style={{ color: 'var(--text-main)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500', opacity: 0.7 }}>Platform</a>
            <a href="#demo" className="btn btn-primary demo-btn" style={{ padding: '8px 20px', borderRadius: '2px' }}>Request Demo</a>
          </div>
        </div>
      </nav>
      
      <main>
        <Hero />
        <UVP />
        <Features />
        
        {/* Lead Capture form Section */}
        <section id="demo" style={{ textAlign: 'center', backgroundColor: '#000' }}>
          <div className="container">
            <div className="glass-card" style={{ padding: '80px 40px', border: 'none', background: 'linear-gradient(135deg, #111, #000)' }}>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '16px' }}>Request a <span className="electric-glow">Personalized Demo</span></h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px' }}>
                Join the network of professionals powering the future. Connect with our sales engineering team.
              </p>
              
              <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '12px', background: '#111', border: '1px solid #333', color: 'white', borderRadius: '4px' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '12px', background: '#111', border: '1px solid #333', color: 'white', borderRadius: '4px' }} />
                  </div>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Company</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required style={{ width: '100%', padding: '12px', background: '#111', border: '1px solid #333', color: 'white', borderRadius: '4px' }} />
                </div>
                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} rows="4" style={{ width: '100%', padding: '12px', background: '#111', border: '1px solid #333', color: 'white', borderRadius: '4px' }}></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>Submit Request</button>
                {status && <p style={{ marginTop: '20px', color: status.includes('Captured') ? 'var(--primary)' : '#ff4444', textAlign: 'center' }}>{status}</p>}
              </form>

              <div style={{ marginTop: '60px', color: 'var(--text-muted)' }}>
                <p>sales@evchargeapp.com | +91 9876543210</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '60px 0', borderTop: '1px solid #111', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        <p>&copy; 2026 EVCharge Sales Platforms. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
          <a href="#" style={{ color: 'inherit' }}>Twitter</a>
          <a href="#" style={{ color: 'inherit' }}>LinkedIn</a>
          <a href="#" style={{ color: 'inherit' }}>Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
