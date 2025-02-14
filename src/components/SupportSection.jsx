// File: support-section.jsx
import React from 'react';
import '../styles/SupportSection.css';

function SupportSection() {
  return (
    <section className="support-section">
      <div className="container">
        <h2>You Are Not Alone</h2>
        <div className="support-content">
          <p>Safe Haven is committed to providing comprehensive support, resources, and technology to combat gender-based violence.</p>
          <div className="emergency-contact">
            <h3>24/7 Emergency Helpline</h3>
            <p>+1 (800) SAFE-NOW</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;