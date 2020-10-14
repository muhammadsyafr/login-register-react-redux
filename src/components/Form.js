import React from "react";
import PropTypes from 'prop-types';

const labelStyle = {
    fontSize: '14px',
    color: '#596275',
    fontFamily: 'Nunito',
    fontWeight: 'bold'
}

const Form = (props) => {
    let placeholder = ''
    if (!props.placeholder) {
        placeholder = `Masukan ${props.label}`
    }

    let status = ''
    if (props.danger === true) {
        status = 'danger'
    } else if (props.danger === false) {
        status = 'success'
    }

    return (
        <div className="field">
            {props.label ? <label style={labelStyle} className="">{props.label}</label> : ''}
            <div className="control has-icons-left">
                <input
                    onChange={props.onChange}
                    className={`input is-${status}`}
                    type={props.type}
                    placeholder={placeholder}
                    name={props.name}
                    disabled={props.disabled}
                    value={props.value}
                />
                <span className="icon is-left">
                    <i className={`fas fa-${props.icon}`}></i>
                </span>
            </div>
        </div>
    );
}

Form.propTypes = {
    status: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}

Form.defaultProps = {
    label: "username",
    status: "",
    type: "text",
    value: ''
};

export default Form;
