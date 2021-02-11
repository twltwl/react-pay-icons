import React from "react";
import ReactDOM from "react-dom";
import * as Icons from "../lib/";

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
      {Object.keys(Icons).map((key) => {
        const Icon = Icons[key];
        return <Icon data-name={key} style={styleProps} />;
      })}
    </div>
  </div>,
  element
);
