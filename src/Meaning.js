import React from "react";
import "./Meanings.css";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p>
      <Synonyms synonyms={props.meaning.definitions[0].synonyms} />
    </div>
  );
}
