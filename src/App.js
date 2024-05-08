import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/movieList";
import Headings from "./components/Headings";
import SearchBar from "./components/SearchComp";
import FavComp from "./components/FavComp";
import RemoveFavs from "./components/RmFavs";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [favs, setFavs] = useState([]);
  const [search, setSearch] = useState("");

  const movieCaller = async () => {
    const url = `http://www.omdbapi.com/?s=${search}&apikey=855effac`;

    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.Search) {
      setMovies(responseJSON.Search);
    }
    console.log(responseJSON);
  };

  useEffect(() => {
    movieCaller(search);
  }, [search]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("react-IMDB-web-app"));

    if (favs) {
      setFavs(favs);
    }
  }, []);

  function addFav(mov) {
    const favList = [...favs, mov];
    setFavs(favList);
    saveLocStorage(favList);
  }
  function removeFav(mov) {
    const newList = favs.filter((el) => el.imdbID !== mov.imdbID);
    setFavs(newList);

    saveLocStorage(newList);
  }

  function saveLocStorage(ele) {
    localStorage.setItem("react-IMDB-web-app", JSON.stringify(ele));
  }

  return (
    <div className="container-fluid mov-r">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Headings heading={"Movies"} />
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="row">
        {" "}
        <MovieList
          movies={movies}
          handleFavsClick={addFav}
          favourite={FavComp}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Headings heading={"Favourite Movies"} />
      </div>
      <div className="row">
        <MovieList
          movies={favs}
          handleFavsClick={removeFav}
          favourite={RemoveFavs}
        />
      </div>
    </div>
  );
}
