import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary row">
      <form className="form-inline" onSubmit={search}>
        <input
          className="form-control col-10"
          onChange={handleKeywordSearch}
          type="search"
          placeholder="What are you looking for?"
        ></input>
      </form>
    </div>
  );
}
