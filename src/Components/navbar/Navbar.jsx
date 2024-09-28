import s from "./navbar.module.css";
import { CgProfile } from "react-icons/cg";
import { BsHandbag } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";


function Navbar() {
  return (
    <div className={s.container}>
      <div className={s.left_section}>
        <div>Logo</div>
        <ul className={s.list}>
          <li>Sportswear & Apparel</li>
          <li>Footwear</li>
          <li>Accessories</li>
          <li>Sports Nutrition</li>
        </ul>
      </div>
      <div>
        <div className={s.right_section}>
          <div className="search_section">
            <input type="text" placeholder="Search"/>
            <IoMdSearch className={s.search_icon}/>
          </div>
          <div>
            <CgProfile />
          </div>
          <div>
            <BsHandbag />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
