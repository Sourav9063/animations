import React from "react";
import styles from "./description.module.css";

export default function BulletPoint({ point }) {
  return (
    <li className={styles["li"]}>
      {/* <span className={styles["bullet"]}>•</span> */}
      <span>{point}</span>
    </li>
  );
}
