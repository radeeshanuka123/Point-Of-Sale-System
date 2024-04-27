// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Navigation.css"

function Navigation() {
  return (
    <nav className='nav'>
      
        
          <Link to="/items" className='nav-link'>Items</Link>
        
        
          <Link to="/stock-management" className='nav-link'>Stock</Link>
        
        
          <Link to="/point-of-sale" className='nav-link'>Point of Sale</Link>
        
    </nav>
  );
};

export default Navigation;
