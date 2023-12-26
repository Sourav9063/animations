import React from "react";
import { CopyBlock, dracula as theme } from "react-code-blocks";
import styles from "./custom-code-block.module.css";

export default function CustomCodeBlock({
  code,
  language = { left: "jsx", right: "css" },
  customTheme = { left: theme, right: theme },
  titles = { left: "REACT", right: "CSS" },
}) {
  return (
    <div className={`${styles["wrapper"]} ${styles[""]} `}>
      <section>
        <h1>{titles.left}</h1>
        <CopyBlock
          text={code.left}
          language={language.left}
          showLineNumbers={true}
          theme={customTheme.left}
          wrapLongLines={true}
          customStyle={{
            maxHeight: "70vh",
            overflow: "auto",
          }}
        />
      </section>
      <section>
        <h1>{titles.right}</h1>
        <CopyBlock
          text={code.right}
          language={language.right}
          showLineNumbers={true}
          theme={customTheme.right}
          wrapLongLines={true}
          customStyle={{
            maxHeight: "70vh",
            overflow: "auto",
          }}
        />
      </section>
    </div>
  );
}
