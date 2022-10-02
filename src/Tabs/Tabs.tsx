import React from 'react';

export function Tabs() {
  return (
    <nav className="Tabs-container">
      <div className="Typography-navButton Tab Tab-active">
        1 Product
      </div>
      <div className="Typography-navButton Tab">
        2 Addresses
      </div>
      <div className="Typography-navButton Tab">
        3 Overview
      </div>
    </nav>
  );
}
