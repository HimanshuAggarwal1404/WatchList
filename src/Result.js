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
            <div className="released">Released: {movie.release_date}</div>

        </div>
    </div>
    </div>
  );
}
