import React from "react";
import styles from "./logo.module.css"; 
import jordanBg from '../../../assets/jordanBg.jpg';
import pumaBg from "../../../assets/pumabg.png";
import nbBg from "../../../assets/nbBg.jpg";
import addidasBg from "../../../assets/addidasbg.jpg";
import nikeBg from "../../../assets/Nikebg.png";

function LogoSection() {
  return (
    <div className={styles.logoSection}>
      <img src={jordanBg} alt="Logo 1" className={styles.logo} /> 
      <img src={pumaBg} alt="Logo 2" className={styles.logo} />
      <img src={nbBg} alt="Logo 3" className={styles.logo} />
      <img src={addidasBg} alt="Logo 4" className={styles.logo} />
      <img src={nikeBg} alt="Logo 5" className={styles.logo} />
    </div>
  );
}

export default LogoSection;
