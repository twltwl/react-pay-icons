import React from "react";
import ReactDOM from "react-dom";
import * as Icons from "../lib/";

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

ReactDOM.render(
  <div>
    <div style={flexProps}>
      {Object.keys(Icons).map((key) => {
        const Icon = Icons[key];
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "10px",
              margin: "10px",
              backgroundColor: "#f2f7fc",
              width: "150px",
            }}
          >
            <span
              style={{
                fontFamily: "helvetica",
                fontWeight: "bold",
                fontSize: "0.8rem",
                margin: "5px",
                color: "#002223",
              }}
            >
              {key}
            </span>
            <Icon data-name={key} style={styleProps} />
          </div>
        );
      })}
    </div>
  </div>,
  element
);
