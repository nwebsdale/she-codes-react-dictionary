import React, { useState } from "react";
import "./Result.css";
import Meaning from "./Meaning.js";

export default function Result(props) {
  if (props.searchResult) {
    return (
      <div className="Result">
        <div className="row word">
          <h2>{props.searchResult.word}</h2>
        </div>
        <div className="row result-info">
          {props.searchResult.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
