import "./Assets/css/add.css";
import React, { useState } from "react";
import { Result } from "./Result";
function Add() {
  const [query, setquery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setquery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=db8431134a25031040ebf6a864067c12&language=en-US&page=1&inc;ude_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Search for a movie"
            value={query}
            onChange={onChange}
          ></input>
        </div>
        <div className="content-wrapper">
          <div className="content">
            {results.length > 0 && (
              <ul className="results">
                {results.map((movie) => (
                  <li key={movie.id}>
                    
                    <Result movie={movie}/>
                  
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Add;
