// File: features-section.jsx
import React from 'react';
import '../styles/FeaturesSection.css';

function FeaturesSection() {
  const features = [
    {
      title: 'Emergency Support',
      description: 'One-touch emergency contacts and location sharing',
      icon: '🚨'
    },
    {
      title: 'Legal Resources',
      description: 'Comprehensive legal guidance and support networks',
      icon: '⚖️'
    },
    {
      title: 'Counseling Services',
      description: 'Confidential online and offline counseling options',
      icon: '❤️‍🩹'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2>Our Mission</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;