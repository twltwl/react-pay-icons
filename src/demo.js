import React from "react";
import ReactDOM from "react-dom";
import * as Icons from "../lib/";
import * as CryptoIcons from "../lib/crypto";

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
  backgroundColor: "#f2f7fc",
  width: "150px",
};

const textStyle = {
  fontFamily: "helvetica",
  fontWeight: "bold",
  fontSize: "0.8rem",
  margin: "5px",
  color: "#002223",
};

ReactDOM.render(
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
            <Icon data-name={key} style={styleProps} />
          </div>
        );
      })}
    </div>
  </div>,
  element
);
