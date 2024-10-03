import React, { useEffect, useState } from "react";
import s from "./index.module.css";
import { useDispatch } from "react-redux";
import { addToCart, removeItem } from "../../Redux/Features/CartSlice";
import axios from "axios";

function CartButtons({ item }) {
  const [itemExists, setItemExists] = useState(false); 
  const dispatch = useDispatch();
  
  async function fetch() {
    const id = localStorage.getItem("id");
    let users = await axios.get(`http://localhost:3000/users/${id}`);
    setItemExists(users.data.cart?.some((it) => it.id === item.id)); 
  }

  useEffect(() => {
    fetch();
  }, []);

  function handleAddToCart(e) {
    e.preventDefault();
    dispatch(addToCart(item));
    setItemExists(true)
  }

  function handleRemoveItem(e) {
    e.preventDefault();
    dispatch(removeItem(item));
    setItemExists(false)
  }

  return (
    <>
      {itemExists ? ( 
        <button onClick={handleRemoveItem} className={s.addToCartBtn}>
          Remove from Cart
        </button>
      ) : (
        <button onClick={handleAddToCart} className={s.addToCartBtn}>
          Add to Cart
        </button>
      )}
    </>
  );
}

export default CartButtons;
