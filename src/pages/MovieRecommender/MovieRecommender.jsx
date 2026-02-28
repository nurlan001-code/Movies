import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./MovieRecommender.css";

function MovieRecommender() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [minRating, setMinRating] = useState(0); // ✅ правильное состояние
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [director, setDirector] = useState("");

  useEffect(() => {
    Papa.parse("/imdb_top_1000.csv", {
      download: true,
      header: true,
      complete: function (results) {
        const parsedMovies = results.data.map((row) => ({
          title: row.Series_Title,
          genre: row.Genre,
          rating: parseFloat(row.IMDB_Rating),
          poster: row.Poster_Link,
          overview: row.Overview,
          director: row.Director,
          star1: row.Star1,
          star2: row.Star2,
          star3: row.Star3,
          star4: row.Star4,

          

        }));
        setMovies(parsedMovies);
      },
      error: function (err) {
        console.error("Ошибка загрузки CSV:", err);
      },
    });
  }, []);

  const recommendMovie = () => {
    const filtered = movies.filter(
      (movie) =>
        movie.genre &&
        movie.genre.toLowerCase().includes(genre.toLowerCase()) &&
        movie.rating >= minRating
    );

    if (filtered.length > 0) {
      const randomMovie =
        filtered[Math.floor(Math.random() * filtered.length)];
      setSelectedMovie(randomMovie);
    }
    else {
        setSelectedMovie(null);
      }
   

  };

  return (
    <div className="app">
      <div className="panel">
        <label>Жанр:</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">Выберите жанр</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
          <option value="Romance">Romance</option>
        </select>

        <label>Минимальный рейтинг IMDb:</label>
        <select
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
        >
          <option value={0}>Все</option>
          <option value={7}>7+</option>
          <option value={8}>8+</option>
          <option value={9}>9+</option>
        </select>

        <button onClick={recommendMovie}>Найти фильм</button>
      </div>

      <div id="result">
        {selectedMovie ? (
          <div className="movie-card">
            <img
              src={selectedMovie.poster}
              alt={selectedMovie.title}
              className="poster"
            />
            <div className="movie-info">
              <h3>{selectedMovie.title}</h3>
              <p>{selectedMovie.overview || "Описание отсутствует."}</p>
              <p>
                <strong>Жанр:</strong> {selectedMovie.genre}
              </p>
              <p>
                <strong>Рейтинг IMDb:</strong> {selectedMovie.rating}
              </p>
              <p>
                <strong>Режиссер:</strong> {selectedMovie.director}
              </p>
              <p>
                <strong>Актеры:</strong> {selectedMovie.star1}, {selectedMovie.star2} , {selectedMovie.star3}, {selectedMovie.star4}
              </p>
            </div>
          </div>
        ) : (
          <p>Фильм не найден.</p>
        )}
      </div>
    </div>
  );
}

export default MovieRecommender;