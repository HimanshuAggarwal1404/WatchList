import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";
import { MovieCard } from "./MovieCard";
import "./Assets/css/watchlist.css"
export const Watched = () => {
  const { watched } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header-watchlist">
          <h1 className="heading-wl">Watched Movies</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">You haven't watched any movie? Watch Now!!</h2>
        )}
      </div>
    </div>
  );
};