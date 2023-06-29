import React from "react";
import { MovieControls } from "./MovieControls";
import "./Assets/css/moviecard.css"

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};