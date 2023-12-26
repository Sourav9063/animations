import React from "react";
import styles from "./animation-container.module.css";
import backgroundImage from "../../../../public/assets/images/slide-background.png";

export default function AnimationContainer({
  children,
  style = {},
  showBg = true,
  center = true,
}) {
  return (
    <div
      style={{
        ...style,
        backgroundImage: showBg ? `url(${backgroundImage.src})` : "none",
      }}
      className={`${styles["animation-container"]} ${
        center ? styles["center"] : ""
      } `}
    >
      {children}
    </div>
  );
}
