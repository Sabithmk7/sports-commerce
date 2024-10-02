import React from 'react';
import s from './mobileNav.module.css';

function MobileNav({ isMenuOpen, toggleMenu }) {
  return (
    <div className={`${s.mobile_menu} ${isMenuOpen ? s.open : ""}`}>
      <ul>
        <li onClick={toggleMenu}>Sportswear & Apparel</li>
        <li onClick={toggleMenu}>Footwear</li>
        <li onClick={toggleMenu}>Accessories</li>
        <li onClick={toggleMenu}>Sports Nutrition</li>
      </ul>
    </div>
  );
}

export default MobileNav;
