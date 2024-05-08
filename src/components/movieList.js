import React from "react";

export default function MovieList(props) {
  const Favourite = props.favourite;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-flex justify-content-start m-3"
          style={{ width: "auto", height: "auto" }}
        >
          <img src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavsClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <Favourite></Favourite>
          </div>
        </div>
      ))}
    </>
  );
}
