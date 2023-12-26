"use client";
import React, { useState } from "react";
import style from "./stars.module.css";

let ratio = window.innerHeight / window.innerWidth;

const getRandomStarPlacement = (starsCount) => {
  const stars = [];
  for (let i = 0; i < starsCount; i++) {
    const star = {
      top: Math.floor(Math.random() * 100),
      left: Math.floor(Math.random() * 100),
      opacity: Math.random() * 0.6 + 0.2,
      size: Math.floor(Math.random() * 18) + 2,
      backgroundColor: `hsl(${
        Math.floor(Math.random() * 100) + 240
      }, 100%, 50%)`,
      animationDelay: Math.floor(Math.random() * 20) + "s",
      animationDuration: Math.floor(Math.random() * 10) + 10 + "s",
    };
    stars.push(star);
  }
  return stars;
};

const distance = (x1, y1, x2, y2) => {
  return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
};
const move = (x1, y1, x2, y2, r) => {
  const angle = Math.atan2(y1 - y2, x1 - x2);
  const newX = x1 - Math.cos(angle) * r;
  const newY = y1 - Math.sin(angle) * r;
  return {
    newX,
    newY,
  };
};

let stars = [];
stars = getRandomStarPlacement(ratio > 1 ? 300 : 375);
const percent = ratio > 1 ? 12 : 15;
const distConst = Math.max(percent * ratio * (percent * ratio), 255);

export default function Stars() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div
      className={style.body}
      onMouseMove={(e) => {
        const rect = e.target.getBoundingClientRect();
        let xtmp = e.clientX - rect.left;
        let ytmp = e.clientY - rect.top;
        xtmp = (xtmp / rect.width) * 100;
        ytmp = (ytmp / rect.height) * 100;
        if (Math.abs(xtmp - x) > 1 || Math.abs(ytmp - y) > 1) {
          setX(xtmp);
          setY(ytmp);
        }
      }}
      onTouchMove={(e) => {
        const rect = e.target.getBoundingClientRect();
        let xtmp = e.touches[0].clientX - rect.left;
        let ytmp = e.touches[0].clientY - rect.top;
        xtmp = (xtmp / rect.width) * 100;
        ytmp = (ytmp / rect.height) * 100;
        if (Math.abs(xtmp - x) > 1 || Math.abs(ytmp - y) > 1) {
          setX(xtmp);
          setY(ytmp);
        }
      }}
    >
      <div className={style.debug}>
        <p>x={x}</p>
        <p>y={y}</p>
        <p>ratio:{ratio}</p>
      </div>
      {stars.map((star, index) => {
        return (
          <div
            key={index}
            className={style.star}
            style={{
              "--opacity": star.opacity,
              backgroundColor: star.backgroundColor,
              left:
                distance(x, y, star.left, star.top) <
                (ratio <= 1 ? distConst * ratio : distConst)
                  ? move(
                      x,
                      y,
                      star.left,
                      star.top,
                      ratio <= 1
                        ? Math.sqrt(distConst) * ratio
                        : Math.sqrt(distConst)
                    ).newX + "%"
                  : star.left + "%",
              top:
                distance(x, y, star.left, star.top) <
                (ratio >= 1 ? distConst / ratio : distConst)
                  ? move(
                      x,
                      y,
                      star.left,
                      star.top,
                      ratio >= 1
                        ? Math.sqrt(distConst) / ratio
                        : Math.sqrt(distConst)
                    ).newY + "%"
                  : star.top + "%",
              opacity:
                distance(x, y, star.left, star.top) <
                (ratio >= 1 ? distConst / ratio : distConst)
                  ? 1
                  : star.opacity,
              animation:
                distance(x, y, star.left, star.top) <
                (ratio >= 1 ? distConst / ratio : distConst)
                  ? "none"
                  : `${style.starAni} ${star.animationDuration} ease ${star.animationDelay} infinite alternate`,
              width: star.size + "px",
              height: star.size + "px",
            }}
          />
        );
      })}
    </div>
  );
}
