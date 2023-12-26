//a component that takes header, description, array of points
//renders the header and description
//makes a bullet point list from the array of points

import React from "react";
import BulletPoint from "./bullet-point";
import styles from "./description.module.css";

export default function Description({ header, description, points }) {
  return (
    <div className={styles["description-container"]}>
      <h1>{header}</h1>
      <p>{description}</p>
      <ul>
        {points.map((point, index) => (
          <BulletPoint key={index} point={point} />
        ))}
      </ul>
    </div>
  );
}
