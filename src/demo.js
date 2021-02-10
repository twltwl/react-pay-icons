import React from "react";
import ReactDOM from "react-dom";
import * as Icons from "../lib/";
import * as TransparentIcons from "../lib/transparent";

const element = document.getElementById("root");

const styleProps = {
  width: 100,
  margin: 10,
  maxHeight: 50,
};

const flexProps = {
  display: "flex",
  flexWrap: "wrap",
};

ReactDOM.render(
  <div style={{ backgroundColor: "#f1f1f1" }}>
    <h2>Icons</h2>
    <div style={flexProps}>
      {Object.values(Icons).map((Icon) => (
        <Icon style={styleProps} />
      ))}
    </div>

    <h2>Transparent Iconz</h2>
    <div style={flexProps}>
      {Object.values(TransparentIcons).map((Icon) => (
        <Icon style={styleProps} />
      ))}
    </div>
  </div>,
  element
);
