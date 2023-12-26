import React from "react";
import styles from "./arrow.module.css";

export default function Arrow() {
  return (
    <div className={`${styles["arrow"]} ${styles[""]} `}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
