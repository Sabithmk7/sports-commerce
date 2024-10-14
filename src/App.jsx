import { Route, Routes } from "react-router-dom";
import "./Styles/style.css";
import HomePage from "./Pages/Home/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Pages/Authorization/Login/LoginPage";
import SignupPage from "./Pages/Authorization/Signup/SignupPage";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./Redux/Features/UserSlice";
import { useEffect } from "react";
import { fetchProducts } from "./Redux/Features/ProductSlice";
import Navbar from "./Components/Header/Nav/Navbar";
import Footer from "./Components/footer/Footer"

import FilteredProducts from "./Pages/FilteredProducts/FilteredProducts";

function App() {
  const dispatch = useDispatch();

  function getAllUsers() {
    dispatch(fetchUsers());
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  function getAllProducts() {
    dispatch(fetchProducts());
  }
  useEffect(() => {
    getAllProducts();
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/products/:category" element={<FilteredProducts />} />
      </Routes>
      <Footer/>
      <ToastContainer />
    </>
  );
}

export default App;
