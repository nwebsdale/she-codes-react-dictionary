import React from "react";
import "./Result.css";
import Meaning from "./Meaning.js";
// import Logo from "./logo.png";
import Phonetic from "./Phonetic.js";
import Photos from "./Photos.js";

export default function Result(props) {
  if (props.searchResult) {
    return (
      <div className="Result">
        <section className="word">
          <div className="row">
            <div className="col-4">
              <h2>{props.searchResult.word}</h2>
            </div>
            <div className="col">
              {props.searchResult.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <Phonetic phonetic={phonetic} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <div className="row result-info">
          <div className="col-8">
            {props.searchResult.meanings.map(function (meaning, meaningIndex) {
              return (
                <div>
                  <section className="meaning" key={meaningIndex}>
                    <Meaning meaning={meaning} />
                  </section>
                </div>
              );
            })}
          </div>
          <div className="col-4">
            <Photos photos={props.photos} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
