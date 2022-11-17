import React from "react";

function Button({ text, extraClass, type = "button", ...rest }) {
    return (
        <button className={`button + ${extraClass}`} type={type} {...rest}>
            <p className="button__text">{text}</p>
        </button>
    );
}

export default Button;
