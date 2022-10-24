import React from "react";
import styles from "./button.module.css";

function Button({ text, extraClass, type = "button", ...rest }) {
  return (
    <button
      className={`${styles.button} + ${extraClass}`}
      type={type}
      {...rest}
    >
      <p className={styles.button__text}>{text}</p>
    </button>
  );
}

export default Button;
