// src/component/Services/Services.jsx
import React from 'react';
// import './services.css';  // Si vous voulez ajouter des styles spécifiques

const Services = () => {
  return (
    <div className="services">
      <h1>Nos Services</h1>
      <div className="services-container">
        <div className="service-card">
          <h2>Service 1</h2>
          <p>Description du service 1</p>
        </div>
        <div className="service-card">
          <h2>Service 2</h2>
          <p>Description du service 2</p>
        </div>
        <div className="service-card">
          <h2>Service 3</h2>
          <p>Description du service 3</p>
        </div>
      </div>
    </div>
  );
};

export default Services;