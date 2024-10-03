import { useNavigate } from "react-router-dom";
import s from "./signupStyle.module.css";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addUser, fetchUsers } from "../../../Redux/Features/UserSlice";
import { useEffect } from "react";
import validation from "./YupValidation";

function SignupPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allUsers } = useSelector(state=>state.users);
  function getUsers() {
    dispatch(fetchUsers());
  }
  useEffect(() => {
    getUsers();
  }, []);
  function navigateSignup() {
    navigate("/login");
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      cart:[]
    },
    validationSchema: validation,
    onSubmit: (values) => {
      const { confirmPassword, ...newUser } = values;
      try {
        const isUser = allUsers?.find((u) => u.email === values.email);
        if (isUser) {
          toast.error("Email already exists");
        } else {
          dispatch(addUser(newUser));
          toast.success("Signup Succesfull!");
          navigate("/login");
        }
      } catch (error) {
        console.log("Error",error);
        toast.error("Error Creating User");
      }
    },
  });

  return (
    <div className={s.container}>
      <div className={s.signup_container}>
        <h2>SIGNUP</h2>
        <form onSubmit={formik.handleSubmit} className={s.input_container}>
          <input
            name="name"
            type="text"
            autoComplete="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="UserName"
          />
          <input
            name="email"
            type="email"
            autoComplete="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Email"
          />
          <input
            name="password"
            type="password"
            autoComplete="new-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="New Password"
          />
          <input
            name="confirmPassword"
            type="password"
            autoComplete="confirm-password"
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            placeholder="Confirm Password"
          />
          <div className={s.buttons}>
            <button type="submit">Submit</button>
            <button type="button" onClick={navigateSignup}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
