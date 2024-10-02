import { Link } from "react-router-dom";
import s from "./bestseller.module.css";
import { useSelector } from "react-redux";
import { CiHeart } from "react-icons/ci";

function BestSeller() {
  const { products } = useSelector(state => state.products);
  const bestsellers = products.filter((item) => item.bestseller);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Our Best Seller</h1>
      <div className={s.grid}>
        {bestsellers.slice(0, 6).map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className={`${s.card} ${s.link}`}>
            <img src={item.image} alt={item.name} />
            <div className={s.cardContent}>
              <h2 className={s.cardTitle}>{item.name}</h2>
              <p className={s.cardPrice}>${item.price}</p>
              <button className={s.addToCartBtn}>Add to Cart</button>
            </div>
            <button className={s.wishlistBtn}>
              <CiHeart className={s.wishlistIcon} />
            </button>
            {item.bestseller && (
              <span className={s.bestseller_label}>Bestseller</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BestSeller;
