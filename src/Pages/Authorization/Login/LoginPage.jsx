import { useNavigate } from "react-router-dom";
import s from "./loginStyle.module.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function LoginPage() {
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  console.log(users)
  function navigateSignup() {
    navigate("/signup");
  }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      try {
        const user = users?.find(u => u.email === values.email && u.password === values.password);
        console.log(user)
        if (user) {
          localStorage.setItem("id", user.id);
          localStorage.setItem("name", user.name);
          toast.success("Logined Succefully");
          navigate("/");
        } else {
          toast.error("Invalid email or password");
        }
      } catch (error) {
        console.log("Error", error);
        toast.error("Login failed");
      }
    },
  });
  return (
    <div className={s.container}>
      <div className={s.login_container}>
        <h2>LOGIN HERE</h2>
        <form onSubmit={formik.handleSubmit} className={s.input_container}>
          <input
            type="text"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.name}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Password"
          />
          <div className={s.buttons}>
            <button type="submit">Submit</button>
            <button type="button" onClick={navigateSignup}>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
