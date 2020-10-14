import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { falseNotification } from "../../config/redux/action/action";
import { registerUserAPI } from "../../config/redux/action/register";

import "./register.scss";

import { useFormik } from "formik";
import { ButtonSubmit } from "../../components/Button";

import { validate_register as validate } from "../../utils/validate_form";

const style = {
  paddingLeft: 0,
  listStyle: "none",
  marginBottom: "10px",
  fontFamily: "Playfair Display",
  fontSize: 40,
  letterSpacing: "4px"
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

function RRegister() {
  const { isLoading, isfalseRegist, messageAction } = useSelector(state => ({
    isLoading: state.auth.isLoading, //default : false
    isfalseRegist: state.auth.falseAction, //default : false
    messageAction: state.auth.messageAction // default : ''
  }));

  const [successRegist, setSuccessRegist] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Register Page`;
  });

  function setNotifSuccess(prevState) {
    setSuccessRegist(!prevState);
  }

  function setNotifFalse() {
    dispatch(falseNotification(true));
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: ""
    },
    validate, //validate form
    onSubmit: async values => {
      let email = values.email;
      let password = values.password;
      const res = await dispatch(registerUserAPI({ email, password }));
      console.log(res);
      if (res) {
        values.email = "";
        values.password = "";
        values.username = "";
        setSuccessRegist(true);
        setTimeout(() => {
          history.push("/login");
        }, 1500);
      }
    }
  });

  return (
    <div className="columns is-centered">
      <div className="login column">
        <div className="columns">
          <div className="column"></div>
          <div className="column is-one-third">
            <section className="section">
              {successRegist ? (
                <div className="notification is-primary">
                  <button onClick={setNotifSuccess} className="delete"></button>{" "}
                  Registrasi Berhasil
                </div>
              ) : null}

              {!isfalseRegist ? null : (
                <div className="notification is-danger">
                  <button onClick={setNotifFalse} className="delete"></button>{" "}
                  {messageAction}
                </div>
              )}

              <div className="has-text-left text-title">
                <h2 className="title" style={style}>
                  Register
                </h2>
                <small className="small-title">
                  Concept of Art learn from here
                </small>
              </div>

              {/* Form */}
              <form onSubmit={formik.handleSubmit}>
                <div className="field">
                  <label className="" style={labelStyle}>
                    Username
                  </label>
                  <div className="control has-icons-left">
                    <input
                      id="username"
                      className="input"
                      name="username"
                      type="text"
                      placeholder="Masukan Username"
                      onChange={formik.handleChange}
                      value={formik.values.username}
                    />
                    <span className="icon is-left">
                      <i className={`fas fa-user`}></i>
                    </span>
                  </div>
                  {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
                  {formik.touched.username && formik.errors.username ? (
                    <div style={errorText}>{formik.errors.username}</div>
                  ) : null}
                </div>

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
                  {/* {formik.errors.email ? <div>{formik.errors.email}</div> : null} */}
                  {formik.touched.password && formik.errors.password ? (
                    <div style={errorText}>{formik.errors.password}</div>
                  ) : null}
                </div>

                <ButtonSubmit
                  color="link"
                  name="Register"
                  className="btn-login"
                  isLoading={isLoading}
                />
              </form>
              {/* End Form */}

              <div className="has-text-centered has-text-dark">
                Do you have an account ?{" "}
                <Link to="/login">
                  <b className="has-text-link"> Sign In </b>
                </Link>
              </div>
            </section>{" "}
          </div>
          <div className="column"></div>
        </div>
      </div>
    </div>
  );
}

export default RRegister;
