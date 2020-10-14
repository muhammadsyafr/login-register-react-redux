import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import Logo from "../../assets/logo.png";
import "./login.scss";

import { falseNotification } from "../../config/redux/action/action";
import { loginUserAPI } from "../../config/redux/action/login";

import { useFormik } from "formik";
import { ButtonSubmit } from "../../components/Button";

import { validate_login as validate } from "../../utils/validate_form";

// Styling
const style = {
  paddingLeft: 0,
  listStyle: "none",
  marginBottom: "20px",
  fontFamily: "Playfair Display",
  fontSize: 40,
  letterSpacing: "4px"
};

const forgotPassword = {
  fontSize: "14px",
  fontFamily: "Nunito",
  fontWeight: "bold"
};

const labelStyle = {
  fontSize: "14px",
  color: "#596275",
  fontFamily: "Nunito",
  fontWeight: "bold"
};

const errorText = {
  fontSize: "12px",
  color: "red",
  marginTop: "5px",
  fontFamily: "Nunito",
  fontStyle: "italic"
};
// End Styling

function LLogin() {
  const { isLoading, invalidLogin, messageAction } = useSelector(state => ({
    isLoading: state.auth.isLoading, //default : false
    invalidLogin: state.auth.falseAction,
    messageAction: state.auth.messageAction
  }));

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Login Page`;
  },[]);

  function setNotifFalse() {
    dispatch(falseNotification(true));
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate, //validate form
    onSubmit: async (values) => {
      let email = values.email;
      let password = values.password;
      const res = await dispatch(loginUserAPI({ email, password }));
      if (res) {
        values.email = "";
        values.password = "";
        setTimeout(() => {
          history.push("/");
        }, 1000);
      }
    }
  });

  return (
    <div className="columns is-vcentered">
      <div className="login column is-4">
        <section className="section">
          {invalidLogin ? (
            <div className="notification is-danger">
              <button onClick={setNotifFalse} className="delete"></button>
              {messageAction}
            </div>
          ) : null}
          <Link to="/">
            <img src={Logo} alt="img-logo" />
          </Link>
          <div className="has-text-left">
            <h2 className="title" style={style}>
              Login
            </h2>
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit}>
            <div className="field">
              <label className="" style={labelStyle}>
                Email
              </label>
              <div className="control has-icons-left">
                <input
                  id="email"
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Masukan Email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                <span className="icon is-left">
                  <i className={`fas fa-envelope`}></i>
                </span>
              </div>
              {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
              {formik.touched.email && formik.errors.email ? (
                <div style={errorText}>{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="field">
              <label className="" style={labelStyle}>
                Password
              </label>
              <div className="control has-icons-left">
                <input
                  id="password"
                  className="input"
                  name="password"
                  type="password"
                  placeholder="Masukan Password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                <span className="icon is-left">
                  <i className={`fas fa-key`}></i>
                </span>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div style={errorText}>{formik.errors.password}</div>
              ) : null}
            </div>
            <a href="#2" style={forgotPassword}>
              Forgot your password?
            </a>
            <ButtonSubmit
              color="link"
              name="Login"
              className="btn-login"
              isLoading={isLoading}
            />
          </form>

          <div className="has-text-centered has-text-dark">
            Don't you have an account ?{" "}
            <Link to="/register">
              <b className="has-text-link"> Sign up </b>
            </Link>
          </div>
          {/* End Form */}
        </section>
      </div>
      <div className="interactive-bg column"></div>
    </div>
  );
}

export default LLogin;
