import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordSearch(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="search">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
              className="form-control"
              onChange={handleKeywordSearch}
              type="search"
              placeholder="What are you looking for?"
              autoFocus={true}
            ></input>
          </form>
        </section>
        <Result searchResult={result} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
