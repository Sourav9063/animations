import React from "react";

export default function Spacer({ height = "0px", width = "0px" }) {
  return <div style={{ height: height, width: width }}></div>;
}
