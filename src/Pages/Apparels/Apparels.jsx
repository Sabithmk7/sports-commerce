import React, { useEffect, useState } from "react";
import s from "./apparels.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

function Apparels() {
  const { products } = useSelector((state) => state.products);
  const [apparels, setApparels] = useState([]);
  useEffect(() => {
    let filteredApparels = products.filter(
      (item) => item.category === "Sportswear & Apparel"
    );
    setApparels(filteredApparels);
  }, [products]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Sports Wear</h1>
      <ul className={s.grid}>
        {apparels.map((item) => (
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
              <button className={s.addToCartBtn}>Add to Cart</button>
            </div>
            <button className={s.wishlistBtn}>
              <CiHeart className={s.wishlistIcon} />
            </button>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Apparels;
