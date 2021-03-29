import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  console.log(props.phonetic.text);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <i class="fas fa-volume-up"></i>
      </a>
      <p>{props.phonetic.text}</p>
    </div>
  );
}
