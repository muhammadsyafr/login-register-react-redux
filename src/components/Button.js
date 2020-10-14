import React from "react";
import PropTypes from 'prop-types';

const Button = (props) => {
    let loading = '';

    if (props.isLoading) {
        loading = 'loading';
    }

    return (
        <div onClick={props.onClick} className={`button is-${props.color} is-${props.shape} ${props.className} is-${loading}`}> {props.name} </div>
    )
}

export const ButtonSubmit = (props) => {
    let loading = false;

    if (props.isLoading) {
        loading = true;
    }

    return (
        <input type="submit" disabled={loading} onClick={props.onClick} className={`button is-${props.color} is-${props.shape} ${props.className}`} value={props.name} />  
    )
}

Button.propTypes = {
    color: PropTypes.string,
    shape: PropTypes.string,
    className: PropTypes.node,
    onClick: PropTypes.func,
}

Button.defaultProps = {
    color: 'primary',
    name: 'Button'
};

export default Button;