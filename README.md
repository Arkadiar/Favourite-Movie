###############################################################################
                                   README
###############################################################################

Simple movie watchlist using react and a little bootstrap. (OMDB API)

Functionality:
Search for movies
Add movies to favourite
Remove movies from favourite
Save to Local Storage.

TODO:
Add preferences based on genre, year and casting.
Current JSON is structured as follows:

```
{
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  "Title": "Avengers: Infinity War",
  "Type": "movie",
  "Year": "2018",
  "imdbID": "tt4154756"
}
```
Modify to get more info ->
```
{
  "Title": "Pirates",
  "Year": "1986",
  "Rated": "PG-13",
  "Released": "18 Jul 1986",
  "Runtime": "121 min",
  "Genre": "Action, Adventure, Comedy",
  "Director": "Roman Polanski",
  "Writer": "John Brownjohn, Gérard Brach, Roman Polanski",
  "Actors": "Walter Matthau, Cris Campion, Damien Thomas",
  "Plot": "The adventures of pirate Captain Red and his first mate Frog.",
  "Language": "English, French, Spanish",
  "Country": "France, Tunisia",
  "Awards": "Nominated for 1 Oscar. 2 wins & 2 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzBmNWNkYTAtYTNhZi00ZjAxLTkzNGQtODk1OTkwZDRmMTJmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
  "Ratings": [
    {"Source": "Internet Movie Database", "Value": "6.0/10"},
    {"Source": "Rotten Tomatoes", "Value": "27%"},
    {"Source": "Metacritic", "Value": "32/100"}
  ],
  "Metascore": "32",
  "imdbRating": "6.0",
  "imdbVotes": "9,376",
  "imdbID": "tt0091757",
  "Type": "movie",
  "DVD": "21 Aug 2020",
  "BoxOffice": "$1,641,825",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}
```
Improve UI and UX.
