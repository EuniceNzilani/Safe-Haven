// File: app-features.jsx
import React from 'react';
import '../styles/AppFeatures.css';

function AppFeatures() {
  const safeHavenFeatures = [
    {
      title: 'Real-time Safety Tracking',
      description: 'GPS tracking and automatic emergency alerts for high-risk situations'
    },
    {
      title: 'Anonymous Reporting',
      description: 'Secure platform for reporting incidents without fear of retaliation'
    },
    {
      title: 'AI-Powered Support',
      description: 'Intelligent chatbot for immediate emotional and procedural guidance'
    },
    {
      title: 'Community Network',
      description: 'Connect with verified support groups and survivor networks'
    }
  ];

  return (
    <section className="app-features" id="app-features">
      <div className="container">
        <h2>Safe Haven App: Your Digital Shield</h2>
        <div className="features-list">
          {safeHavenFeatures.map((feature, index) => (
            <div key={index} className="feature-item">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppFeatures;