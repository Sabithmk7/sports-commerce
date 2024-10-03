import React, { useEffect, useState } from "react";
import s from "./footwear.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import CartButtons from "../../Components/CartButtons/CartButtons";

function Footwear() {
  const { products } = useSelector((state) => state.products);
  const [footwear, setFootwear] = useState([]);
  useEffect(() => {
    let filteredfootwear = products.filter(
      (item) => item.category === "Footwear"
    );
    setFootwear(filteredfootwear);
  }, [products]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Footwears</h1>
      <ul className={s.grid}>
        {footwear.map((item) => (
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
              <CartButtons item={item}/>
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

export default Footwear;
