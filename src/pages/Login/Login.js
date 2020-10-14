import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./login.scss";

import { falseNotification } from "../../config/redux/action/action";
import { loginUserAPI } from "../../config/redux/action/login";

import Form from "../../components/Form";
import {ButtonSubmit} from "../../components/Button";

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
// End Styling

function Login() {
  const { isLoading, isDisabled, invalidLogin, messageAction } = useSelector(state => ({
    isLoading: state.isLoading, //default : false
    isDisabled: state.isDisabled, //default : false'
    invalidLogin: state.falseAction,
    messageAction: state.messageAction
}));


  const [user, setUser] = useState([]);
  const [danger] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `Login Page`;
  });

  const submitLogin = async () => {
    const { email, password } = user;
    const res = await dispatch(loginUserAPI({email, password}));
    if (res) {
      // console.log(res)
      setUser({
        email: '',
        password: ''
      })
    }
  }

  function onChangeForm(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  function setNotifFalse() {
    dispatch(falseNotification(true));
}

  return (
    <div className="columns is-vcentered">
      <div className="login column is-4">
        <section className="section">
        {
          invalidLogin ? <div className="notification is-danger"><button onClick={setNotifFalse} className="delete"></button>{messageAction}</div> : null
        }
          <Link to="/">
            <img src={Logo} alt="img-logo" />
          </Link>
          <div className="has-text-left">
            <h2 className="title" style={style}>
              Login
            </h2>
          </div>

          {/* Form */}
          <Form
            icon="envelope"
            type="text"
            name="email"
            label="Email"
            onChange={e => {
              onChangeForm(e);
            }}
            disabled={isDisabled}
            className={`${danger}`}
            value={user.email}
          />
          <Form
            icon="key"
            type="password"
            name="password"
            label="Password"
            onChange={e => {
              onChangeForm(e);
            }}
            disabled={isDisabled}
            value={user.password}
          />

          <a href="#2" style={forgotPassword}>
            Forgot your password?
          </a>
         
          <ButtonSubmit onClick={submitLogin} color="link" name="Login" className="btn-login" isLoading={isLoading} />
          {/* End Form */}

          <div className="has-text-centered has-text-dark">
            Don't you have an account ?{" "}
            <Link to="/register">
              <b className="has-text-link"> Sign up </b>
            </Link>
          </div>
        </section>
      </div>
      <div className="interactive-bg column"></div>
    </div>
  );
}

export default Login;
