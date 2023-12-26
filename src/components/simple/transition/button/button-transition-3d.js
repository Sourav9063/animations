import React from "react";
import styles from "./button-transition.module.css";

export default function ButtonTransition3d({
  text = "Hover me",
  onClick = () => {},
}) {
  return (
    <div className={`${styles["container-button"]} ${styles[""]} `}>
      <div className={`${styles["hover"]} ${styles["bt-1"]} `}></div>
      <div className={`${styles["hover"]} ${styles["bt-2"]} `}></div>
      <div className={`${styles["hover"]} ${styles["bt-3"]} `}></div>
      <div className={`${styles["hover"]} ${styles["bt-4"]} `}></div>
      <div className={`${styles["hover"]} ${styles["bt-5"]} `}></div>
      <div className={`${styles["hover"]} ${styles["bt-6"]} `}></div>
      <button
        onClick={onClick}
        className={`${styles["button-1"]} ${styles["button"]} `}
      >
        {text}
        <span></span>
      </button>
    </div>
  );
}
