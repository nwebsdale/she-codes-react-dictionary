import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
    alert(response);
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
