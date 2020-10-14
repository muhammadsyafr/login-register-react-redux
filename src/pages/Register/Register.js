import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { falseNotification } from "../../config/redux/action/action";
import { registerUserAPI } from "../../config/redux/action/register";

import "./register.scss";

import Form from "../../components/Form";
import { ButtonSubmit } from "../../components/Button";

const style = {
    paddingLeft: 0,
    listStyle: 'none',
    marginBottom: '10px',
    fontFamily: 'Playfair Display',
    fontSize: 40,
    letterSpacing: '4px'
};

function Register() {
    const { isLoading, isDisabled, isfalseRegist, messageAction } = useSelector(state => ({
        isLoading: state.isLoading, //default : false
        isDisabled: state.isDisabled, //default : false
        isfalseRegist: state.falseAction, //default : false
        messageAction: state.messageAction // default : ''
    }));

    
    const [user, setUser] = useState([]);
    const [danger] = useState(false)
    const [successRegist, setSuccessRegist] = useState(false)

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        // Update the document title using the browser API
        document.title = `Register Page`;
    });

    const submitRegister = async () => {
        const { email, password } = user
        //async register
        const res = await dispatch(registerUserAPI({ email, password }));
        if (res) {
            console.log('pendaftaran sukses')
            setSuccessRegist(true)
            setTimeout(() => {
                history.push('/login')
            }, 1500);
        }
       
    }

    function setNotifSuccess(prevState) {
        setSuccessRegist(!prevState)
    }

    function setNotifFalse() {
        dispatch(falseNotification(true));
    }

    function onChangeForm(e) {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    return (
        <div className="columns is-centered">
            <div className="login column">
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-one-third">
                        <section className="section">
                            {
                                successRegist ?
                                <div className="notification is-primary"><button onClick={setNotifSuccess} className="delete"></button> Registrasi Berhasil </div> : null
                            }

                            {
                                !isfalseRegist ?
                                null : <div className="notification is-danger"><button onClick={setNotifFalse} className="delete"></button> {messageAction} </div>
                            }

                            <div className="has-text-left text-title">
                                <h2 className="title" style={style}> Register</h2>
                                <small className="small-title">Concept of Art learn from here</small>
                            </div>

                            {/* Form */}
                            <Form
                                icon="user"
                                value={user.name}
                                type="text"
                                name="name"
                                label="Nama"
                                onChange={(e) => { onChangeForm(e) }}
                                disabled={isDisabled}
                                className={`${danger}`}
                            />
                            <Form
                                icon="envelope"
                                value={user.email}
                                type="text"
                                name="email"
                                label="Email"
                                onChange={(e) => { onChangeForm(e) }}
                                disabled={isDisabled}
                                className={`${danger}`}
                            />
                            <Form
                                icon="key"
                                value={user.password}
                                type="password"
                                name="password"
                                label="Password"
                                onChange={(e) => { onChangeForm(e) }}
                                disabled={isDisabled}
                                className={`${danger}`}
                            />

                            <ButtonSubmit onClick={submitRegister} color="link" name="Register" className="btn-login" isLoading={isLoading} />
                            {/* End Form */}

                            <div className="has-text-centered has-text-dark">
                                Do you have an account ? <Link to="/login"><b className="has-text-link"> Sign In </b></Link>
                            </div>
                        </section> </div>
                    <div className="column"></div>
                </div>
            </div>

        </div>
    );
}

export default Register;
