import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { employeeloginSchema } from "./YupSchema";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "../styleSheet/login.css";
import { useNavigate } from "react-router-dom";
import Signup from "./Signup";
function Login() {
  const [showIcon, setShowIcon] = useState(false);
  const navigate = useNavigate();
  const onSubmit2 = async (values, actions) => {
    try {
      let sendData = await axios
        .post(`http://localhost:5000/users/login`, {
          username: values.username,
          password: values.password,
        })
        .then((d) => {
          console.log(d.data);
          if (d.data.statusCode === 200) {
            localStorage.setItem("user", JSON.stringify(d.data.myData));
            console.log(d.data.myData);
            toast.success("Login Successful", {
              autoClose: 2000,
            });
            setTimeout(() => {
              let loginSignupClass = document.querySelector(".login-signup");
              loginSignupClass.className = "ls-remove";
              let headClass = document.querySelector(".head1");
              headClass.className = "head";
              navigate("/dashboard");
            }, 3000);
          } else {
            toast.error("error logging", {
              autoClose: 2000,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("internal error", {
            autoClose: 2000,
          });
        });
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: employeeloginSchema,
    onSubmit: onSubmit2,
  });

  useEffect(() => {
    const switchers = [...document.querySelectorAll(".switcher")];

    switchers.forEach((item) => {
      item.addEventListener("click", function () {
        switchers.forEach((item) =>
          item.parentElement.classList.remove("is-active")
        );
        this.parentElement.classList.add("is-active");
      });
    });
    // localStorage.setItem("user", "");
    // let loginSignupClass = document.querySelector(".ls-remove");
    // if (loginSignupClass) loginSignupClass.className = "login-signup";
    // let headClass = document.querySelector(".head");
    // if (headClass) headClass.className = "head1";
  }, []);
  return (
    <div className="">
      {/* <div className="login-container"> */}
      <section className="forms-section">
        <div className="forms">
          <div className="form-wrapper is-active">
            <button type="button" className="switcher switcher-login">
              Login
              <span className="underline"></span>
            </button>
            <div className="modal-form">
              <form
                onSubmit={formik.handleSubmit}
                className="form form-login"
                autoComplete="off"
              >
                <div className="popup-header">
                  <div className="title-modal">Login</div>
                  <div className="which-page">Welcome!</div>
                </div>
                <div className="input-tag mb-3">
                  <label className="placeholder-label ">
                    Username
                    {formik.errors.username && formik.touched.username ? (
                      <span className="error">{formik.errors.username}</span>
                    ) : (
                      <span></span>
                    )}
                  </label>
                  <input
                    type="text"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    placeholder="Username"
                    id="username"
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div className="input-tag mb-3">
                  <label className="placeholder-label ">
                    Password
                    {formik.errors.password && formik.touched.password && (
                      <span className="error">{formik.errors.password}</span>
                    )}
                  </label>
                  <input
                    type={showIcon ? "text" : "password"}
                    id="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Password"
                  />

                  <div className="eye-icon">
                    {showIcon ? (
                      <VisibilityIcon
                        className="visibility-icon"
                        onClick={() => {
                          setShowIcon(false);
                        }}
                      />
                    ) : (
                      <VisibilityOffIcon
                        className="visibility-icon"
                        onClick={() => {
                          setShowIcon(true);
                        }}
                      />
                    )}
                  </div>
                </div>

                <div className="model-footer">
                  <div className="model-button">
                    {/* <button className="close-button" onClick={handleClose}>
                    Close
                  </button> */}
                    <button
                      disabled={formik.isSubmitting}
                      type="submit"
                      className="sign-up-button "
                    >
                      Log-in
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
              Sign Up
              <span className="underline"></span>
            </button>
            <Signup />
          </div>
        </div>
      </section>
      {/* <div className="image-section"></div> */}
      {/* </div> */}
      <ToastContainer />
    </div>
  );
}

export default Login;
