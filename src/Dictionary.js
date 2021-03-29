import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";
import Result from "./Result.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [result, setResult] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000137756aa7fbef493998435cb7d6326099";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Result searchResult={result} photos={photos} />
        <p className="link">
          <a
            href="https://github.com/nwebsdale/she-codes-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Natasha Websdale
        </p>
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
