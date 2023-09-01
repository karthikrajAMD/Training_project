import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { employeeSignupSchema } from "./YupSchema";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
function Signup() {
  const [showIcon, setShowIcon] = useState(false);
  const [showIcon1, setShowIcon1] = useState(false);
  const onSubmit2 = async (values, actions) => {
    console.log(values);
    try {
      //   handleClose();
      console.log(values);
      let sendData = await axios
        .post(`http://localhost:5000/users`, {
          fName: values.fName,
          username: values.username,
          email: values.email,
          password: values.password,
        })
        .then((d) => {
          console.log(d.data.message);
          if (d.data.status === 200) {
            toast.success("Signup successful");
          } else {
            toast.error("error signing-up");
          }
        })
        .catch((err) => {
          toast.error("Internal error");
          console.log(err);
        });
      actions.resetForm();
    } catch (error) {
      console.log(error);
    }
  };
  //   const handleClose = () => {
  //     dispatch(Show1());
  //     document.body.classList.add("change-background");
  //     document.body.classList.remove("change-background1");
  //   };
  const formik = useFormik({
    initialValues: {
      fName: "",
      username: "",
      email: "",
      password: "",
      cPassword: "",
    },
    validationSchema: employeeSignupSchema,
    onSubmit: onSubmit2,
  });
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="form form-signup"
        autoComplete="off"
      >
        <div className="popup-header">
          <div className="title-modal">Sign-up</div>
          <div className="which-page">New Employee </div>
        </div>
        <div className="input-tag mb-3">
          <label>
            Full Name
            {formik.errors.fName && formik.touched.fName ? (
              <span className="error">{formik.errors.fName}</span>
            ) : (
              <span></span>
            )}
          </label>
          <input
            type="text"
            value={formik.values.fName}
            onChange={formik.handleChange}
            placeholder="Enter you full name"
            id="fName"
            onBlur={formik.handleBlur}
            // autoFocus
          />
        </div>
        <div className="input-tag mb-3">
          <label>
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
            // autoFocus
          />
        </div>
        <div className="input-tag mb-3">
          <label>
            Email
            {formik.errors.email && formik.touched.email && (
              <span className="error">{formik.errors.email}</span>
            )}
          </label>
          <input
            type="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Example : modi@gmail.com"
          />
        </div>
        <div className="input-tag mb-3">
          <label>
            Password{" "}
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
            placeholder="Your password"
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
        <div className="input-tag mb-3">
          <label>
            Confirm Password
            {formik.errors.cPassword && formik.touched.cPassword && (
              <span className="error">{formik.errors.cPassword}</span>
            )}
          </label>
          <input
            type={showIcon1 ? "text" : "password"}
            id="cPassword"
            value={formik.values.cPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Re-Enter to confirm your password"
          />

          <div className="eye-icon">
            {showIcon1 ? (
              <VisibilityIcon
                className="visibility-icon"
                onClick={() => {
                  setShowIcon1(false);
                }}
              />
            ) : (
              <VisibilityOffIcon
                className="visibility-icon"
                onClick={() => {
                  setShowIcon1(true);
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
              Sign up
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default Signup;
