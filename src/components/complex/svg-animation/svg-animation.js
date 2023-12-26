import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./svg-animation.module.css";

const nameAnime = ({ paths, isHover }) => {
  const duration = 1500;
  const delay = duration / ((paths.length + 1) / 2);
  for (let i = 0; i < paths.length; i++) {
    paths[i].animate(
      {
        strokeDashoffset:
          paths[i].getTotalLength() -
          paths[i].getTotalLength() * (isHover ? 3 : 1),
      },
      {
        duration: duration,
        fill: "forwards",
        easing: "ease",
        delay: delay * i,
      }
    );
  }
};

export default function SBH() {
  const svgRef = useRef(null);
  const pathsRef = useRef(null);

  useLayoutEffect(() => {
    const nameAnimInit = () => {
      const tmpPaths = [...svgRef.current.children].filter(
        (path) => path.localName === "path"
      );
      for (let path of tmpPaths) {
        path.style.strokeDasharray = path.getTotalLength();
      }
      pathsRef.current = tmpPaths;
    };

    nameAnimInit();

    return () => {};
  }, []);

  return (
    <svg
      className={`${styles["svg"]} ${styles[""]} `}
      viewBox="0 0 104 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      onMouseEnter={() => {
        nameAnime({ paths: pathsRef.current, isHover: true });
      }}
      onMouseLeave={() => {
        nameAnime({ paths: pathsRef.current, isHover: false });
      }}
    >
      <path d="M51.9989 2C46.9004 2 42.7674 6.14776 42.7674 11.2641C42.7674 16.3805 46.9004 20.5283 51.9989 20.5283C57.0974 20.5283 61.2304 16.3805 61.2304 11.2641C61.2304 6.14776 57.0974 2 51.9989 2Z" />
      <path d="M47.6416 29.7144H20.1188V39.2974H29.1785L29.1798 48.1911L15.7614 48.1917C13.1621 48.1917 11.0597 50.3396 11.0597 52.9832C11.0597 55.6269 13.1621 57.7747 15.7614 57.7747L29.1798 57.7735L29.1785 85.1444H20.1188V94.7275H47.6416V85.1444H38.5831L38.582 67.0117H47.298V71.4586C47.298 74.1022 49.4004 76.2501 51.9997 76.2501C54.599 76.2501 56.7014 74.1022 56.7014 71.4586L56.702 67.0117H65.418L65.4168 85.1444H56.3584V94.7275H83.8812V85.1444H74.8202V39.2974H83.8812V29.7144H56.3584V39.2974H65.418L65.4168 57.4288H56.702L56.7014 52.9832C56.7014 50.3396 54.599 48.1917 51.9997 48.1917C49.4004 48.1917 47.298 50.3396 47.298 52.9832V57.4288H38.5831V39.2974H47.6416V29.7144Z" />
      <path d="M97.2983 48.1917H83.5369V57.7747H97.2983C99.8976 57.7747 102 55.6269 102 52.9832C102 50.3396 99.8976 48.1917 97.2983 48.1917Z" />
      <path d="M15.7614 66.6672H2V76.2501H15.7614C18.3607 76.2501 20.4631 74.1022 20.4631 71.4586C20.4631 68.815 18.3607 66.6672 15.7614 66.6672Z" />
      <path d="M97.2983 66.6672H83.5369V76.2501H97.2983C99.8976 76.2501 102 74.1022 102 71.4586C102 68.815 99.8976 66.6672 97.2983 66.6672Z" />
      <path d="M51.9997 118L60.1408 103.621H43.8586L51.9997 118Z" />
    </svg>
  );
}
