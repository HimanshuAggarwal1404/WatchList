import React from "react";
import "./Assets/css/Result.css"

export const Result=({movie})=> {
  return (
    <div className="Result">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="poster"></div>
        )}
      </div>
    <div className="info">
        <div className="header">
            <div className="title">{movie.title}</div>
            <div className="released">{movie.release_date? movie.release_date.substring(0,4): "-"}</div>
            <div className="buttons">
              <button className="btn">Add to Watchlist</button>
              <button className="btn">Add to Watchlist</button>



            </div>

        </div>
    </div>
    </div>
  );
}
