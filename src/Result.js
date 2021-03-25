import React, { useState } from "react";
import "./Result.css";
import Meaning from "./Meaning.js";

export default function Result(props) {
  console.log(props.searchResult);
  if (props.searchResult) {
    return (
      <div className="Result">
        <h2>{props.searchResult.word}</h2>
        {props.searchResult.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
