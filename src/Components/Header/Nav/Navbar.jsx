import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  function toLogin() {
    navigate("/login");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className={s.container}>
      <div className={s.left_section}>
        <div className={s.logo}>Logo</div>
        <ul className={s.list}>
          <li>
            <NavLink
              to="/apparels"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
            >
              Sportswear & Apparel
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/footwear"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
            >
              Footwear
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
            >
              Accessories
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sports-nutrition"
              className={({ isActive }) =>
                isActive ? s.activeLink : undefined
              }
            >
              Sports Nutrition
            </NavLink>
          </li>
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
        <div>
          <CiHeart className={s.wishlistIcon} />
        </div>
        <div className={s.menu_icon} onClick={toggleMenu}>
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>
      <MobileNav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Navbar;
