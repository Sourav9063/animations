import React from "react";
import styles from "./button-transition.module.css";

export default function ButtonTransition({
  text = "Hover me",
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`${styles["button"]} ${styles["button-2"]} `}
    >
      {text}
      <span></span>
    </button>
  );
}
