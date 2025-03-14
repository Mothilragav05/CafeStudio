import React from 'react';
import './DesignSection.css'; // Import CSS file for styling

const DesignSection = () => {
  return (
    <div className="design-section">
      <h2>Design</h2>
      <h3>UX/UI Designers</h3>
      <div className="designer-card">
        <div className="designer-info">
          <h4>Jothiswaran</h4>
          <p>UI/UX Designer</p>
          <p>
            Jothiswaran specializes in creating intuitive and engaging user interfaces.
            With a keen eye for detail, he transforms complex ideas into elegant designs.
          </p>
        </div>
      </div>
      <div className="designer-card">
        <div className="designer-info">
        <div className="design-section">
        
          <h4>Dhina</h4>
          <p>Frontend Developer</p>
          <p>
           Dhina 
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;