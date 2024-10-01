import React, { useEffect, useState } from "react";
import s from "./category.module.css";
import axios from "axios";

function Category() {
  const [categories, setCategories] = useState([]);

  async function fetchCategories() {
    let res = await axios.get("http://localhost:3000/categories");
    setCategories(res.data);
  }
  
  useEffect(() => {
    fetchCategories();
  }, []);
  
  return (
    <div className={s.container}>
      <ul>
        {categories.map((v) => (
          <li key={v.id} className={s.category}>
            <div>
              <img src={v.image} alt={v.name} /> 
            </div>
            <span>{v.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
