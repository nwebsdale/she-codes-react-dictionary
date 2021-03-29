import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definitions[0].definition}</p>
      <p>
        <h4>Example: </h4>"<em>{props.meaning.definitions[0].example}</em>"
      </p>
      <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
    </div>
  );
}
