import React,{useContext} from "react";
import { GlobalContext } from "./GlobalState";
import "./Assets/css/Result.css"

export const Result=({movie})=> {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;
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
              <button className={`btn`} onClick={()=>addMovieToWatchlist(movie)} disabled={watchlistDisabled}>Add to Watchlist</button>
              <button className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}>Add to Watched</button>



            </div>

        </div>
    </div>
    </div>
  );
}
