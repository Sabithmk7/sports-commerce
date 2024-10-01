import React, { useState } from "react";
import s from "./navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for menu
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  function toLogin() {
    navigate("/login");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  }

  return (
    <div className={s.container}>
      <div className={s.left_section}>
        <div className={s.logo}>Logo</div>
        <ul className={s.list}>
          <li>Sportswear & Apparel</li>
          <li>Footwear</li>
          <li>Accessories</li>
          <li>Sports Nutrition</li>
        </ul>
      </div>

      <div className={s.right_section}>
        <div className={s.search_section}>
          <input type="text" placeholder="Search" />
          <IoMdSearch className={s.search_icon} />
        </div>
        <div className={s.profile}>
          <CgProfile onClick={toLogin} />
          <span>{name}</span>
        </div>
        <div>
          <BsHandbag />
        </div>
        <div className={s.menu_icon} onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          {/* Toggle between menu and close icon */}
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileNav isMenuOpen={{isMenuOpen,toggleMenu}}/>
    </div>
  );
}

export default Navbar;
