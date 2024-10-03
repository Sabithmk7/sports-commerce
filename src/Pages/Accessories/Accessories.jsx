import React, { useEffect, useState } from "react";
import s from "./accessories.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import CartButtons from "../../Components/CartButtons/CartButtons";


function Accessories() {
  const { products } = useSelector((state) => state.products);
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    let filteredaccessories = products.filter(
      (item) => item.category === "Accessories"
    );
    setAccessories(filteredaccessories);
  }, [products]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Sports Accessories</h1>
      <ul className={s.grid}>
        {accessories.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className={`${s.card} ${s.link}`}
          >
            {" "}
            <img src={item.image} alt={item.name} />
            <div className={s.cardContent}>
              <h2 className={s.cardTitle}>{item.name}</h2>
              <p className={s.cardPrice}>${item.price}</p>
            </div>
              <CartButtons item={item}/>
            <button className={s.wishlistBtn}>
              <CiHeart className={s.wishlistIcon} />
            </button>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Accessories;
