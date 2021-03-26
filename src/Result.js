import React from "react";
import "./Result.css";
import Meaning from "./Meaning.js";
import Logo from "./logo.png";

export default function Result(props) {
  if (props.searchResult) {
    return (
      <div className="Result">
        <section className="word">
          <div className="row">
            <h2>{props.searchResult.word}</h2>
          </div>
        </section>

        <div className="row result-info">
          <div className="col-8">
            {props.searchResult.meanings.map(function (meaning, index) {
              return (
                <div>
                  <section className="meaning" key={index}>
                    <Meaning meaning={meaning} />
                  </section>
                </div>
              );
            })}
          </div>

          <div className="col-4">
            <div className="row">
              <img className="temp-img" src={Logo} alt="Logo" />
            </div>
            <div className="row">
              <img className="temp-img" src={Logo} alt="Logo" />
            </div>
            <div className="row">
              <img className="temp-img" src={Logo} alt="Logo" />
            </div>
            <div className="row">
              <img className="temp-img" src={Logo} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
