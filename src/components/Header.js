import React from 'react';
import logo from '../images/logo-objective.png';

function Header() {

  return (
    <header className="header">
      <h3 className="header-logo">
        <img className="header-logo-image" src={logo} alt="Objective Solutions"/>
      </h3>
      <div className="header-info">
        <div className="header-info-text">
          <h2 className="header-info-candidate">Nathalia Bruno</h2>
          <h3 className="header-info-subtitle">Teste de Front-end</h3>
        </div>
        <span className="header-info-badge">CB</span>
      </div>
    </header>
  );
}

export default Header;
