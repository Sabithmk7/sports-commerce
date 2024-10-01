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

function App() {
  const dispatch = useDispatch();
  
  function getAllUsers() {
    dispatch(fetchUsers());
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
