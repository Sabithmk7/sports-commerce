import React, { useEffect, useState } from "react";
import s from "./Nutrition.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import CartButtons from "../../Components/CartButtons/CartButtons";

function Nutrition() {
  const { products } = useSelector((state) => state.products);
  const [Nutrition, setNutrition] = useState([]);
  useEffect(() => {
    let filteredNutrition = products.filter(
      (item) => item.category === "Sports Nutrition"
    );
    setNutrition(filteredNutrition);
  }, [products]);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Sports Nutritions</h1>
      <ul className={s.grid}>
        {Nutrition.map((item) => (
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

export default Nutrition;
