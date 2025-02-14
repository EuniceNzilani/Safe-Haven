// File: resources-section.jsx
import React from 'react';
import '../styles/ResourcesSection.css';

function ResourcesSection() {
  const resources = [
    {
      title: 'Legal Aid',
      link: '#legal-resources',
      description: 'Free legal consultation and support'
    },
    {
      title: 'Counseling',
      link: '#counseling',
      description: 'Professional mental health support'
    },
    {
      title: 'Safe Shelters',
      link: '#shelters',
      description: 'Nationwide network of safe accommodation'
    }
  ];

  return (
    <section className="resources-section">
      <div className="container">
        <h2>Support Resources</h2>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
              <a href={resource.link} className="resource-link">Access Resource</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;