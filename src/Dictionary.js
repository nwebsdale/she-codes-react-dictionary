import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordSearch(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section className="search">
        <form className="form-inline" onSubmit={search}>
          <input
            className="form-control"
            onChange={handleKeywordSearch}
            type="search"
            placeholder="What are you looking for?"
          ></input>
        </form>
      </section>
      <Result searchResult={result} />
    </div>
  );
}
