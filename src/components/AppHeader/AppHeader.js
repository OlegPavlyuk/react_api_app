import React from 'react';

import './AppHeader.css';

const AppHeader = () => {
  return (
    <header className="d-flex">
      <h3>
        <a href="#">Star App</a>
      </h3>
      <nav className="d-flex">
        <a href="#">People</a>
        <a href="#">Planets</a>
        <a href="#">Starships</a>
      </nav>
    </header>
  );
};

export default AppHeader;
