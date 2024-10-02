import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import s from "./footer.module.css"; // Import the CSS module for the footer

function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerInfo}>
          <h3 className={s.footerTitle}>Your Company</h3>
          <p className={s.footerDescription}>
            Your Company provides top-quality products to our customers. Follow
            us on social media to stay updated with the latest offers.
          </p>
        </div>
        <div className={s.footerLinks}>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className={s.footerSocials}>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className={s.footerBottom}>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
