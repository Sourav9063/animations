import React, { useState } from "react";
import styles from "./transition.module.css";

export default function TransitionCus() {
  const [rotation, setRotation] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [borderRadius, setBorderRadius] = useState(0);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);

  return (
    <>
      <section>
        <div className={styles["input"]}>
          <label htmlFor="rotation">Rotation:</label>
          <input
            type="range"
            min="0"
            max="360"
            value={rotation}
            onChange={(e) => setRotation(e.target.value)}
            className={styles["slider"]}
          />
          <p>{rotation + "deg"}</p>
        </div>
        <div className={styles["input"]}>
          <label htmlFor="opacity">Opacity:</label>
          <input
            type="range"
            min="0"
            max="100"
            value={opacity}
            onChange={(e) => setOpacity(e.target.value)}
            className={styles["slider"]}
          />
          <p>{opacity + "%"}</p>
        </div>
        <div className={styles["input"]}>
          <label htmlFor="borderRadius">Border Radius:</label>
          <input
            type="range"
            min="0"
            max="50"
            value={borderRadius}
            onChange={(e) => setBorderRadius(e.target.value)}
            className={styles["slider"]}
          />
          <p>{borderRadius + "%"}</p>
        </div>
        <div className={styles["input"]}>
          <label htmlFor="top">Top:</label>
          <input
            type="range"
            min="-50"
            max="50"
            value={top}
            onChange={(e) => setTop(e.target.value)}
            className={styles["slider"]}
          />
          <p>{top + "%"}</p>
        </div>
        <div className={styles["input"]}>
          <label htmlFor="left">Left:</label>
          <input
            type="range"
            min="-50"
            max="50"
            value={left}
            onChange={(e) => setLeft(e.target.value)}
            className={styles["slider"]}
          />
          <p>{left + "%"}</p>
        </div>
      </section>
      <div
        style={{
          "--rotation": rotation + "deg",
          "--opacity": opacity / 100,
          "--border-radius": borderRadius + "%",
          "--left": left + "%",
          "--top": top + "%",
        }}
        className={`${styles["box"]} ${styles["custom-properties"]} `}
      ></div>
    </>
  );
}
