import React from "react";
import { createRoot } from "react-dom/client";
import * as Icons from "./Icons";
import * as CryptoIcons from "./Icons/crypto";

console.log(CryptoIcons);

const element = document.getElementById("root");

const styleProps = {
  width: 100,
  maxHeight: 50,
};

const flexProps = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "stretch",
};

const wrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  padding: "10px",
  margin: "10px",
  width: "150px",
  background: "#f2f7fc",
};

const textStyle = {
  fontFamily: "helvetica",
  fontWeight: "bold",
  fontSize: "0.8rem",
  margin: "5px",
  color: "#002223",
};

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <div>
    <div style={flexProps}>
      {Object.keys(Icons).map((key) => {
        const Icon = Icons[key];
        return (
          <div style={wrapperStyle} key={key}>
            <span style={textStyle}>{key}</span>
            <Icon data-name={key} style={styleProps} />
          </div>
        );
      })}
      <h2 style={{ width: "100%" }}>Crypto Icons</h2>
      {Object.keys(CryptoIcons).map((key) => {
        const Icon = CryptoIcons[key];
        return (
          <div style={wrapperStyle} key={key}>
            <span style={textStyle}>{key}</span>
            <Icon data-name={key} width="100" />
          </div>
        );
      })}
    </div>
  </div>
);
