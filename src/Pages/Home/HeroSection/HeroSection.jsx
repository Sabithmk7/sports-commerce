import React from "react";
import shoeHero from '../../../assets/homeImg.jpg';
import { useNavigate } from "react-router-dom";
import s from './hero.module.css'; // Import the CSS module

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={s.heroContainer} style={{ backgroundImage: `url(${shoeHero})` }}>
        <div className={s.heroContent}>
          <h1 className={s.heroTitle}>Step Into Style</h1>
          <p className={s.heroDescription}>
            Elevate your style with our latest collection of sleek, comfortable shoes.
            <br /> Designed for everyday wear, they offer the perfect blend of performance and
            <br /> modern aesthetics. Step confidently into any occasion with footwear that sets the pace.
          </p>
          <button onClick={() => navigate('/collections')} className={s.heroButton}>
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
