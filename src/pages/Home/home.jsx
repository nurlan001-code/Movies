import React from "react";
import "./home.css";




function Home() {
  const movie = {
    title: "Inception",
    genre: "Action, Sci-Fi",
    rating: 8.8,
    poster: "https://m.media-amazon.com/images/I/51s+z0ZlZyL._AC_.jpg",
    overview:
      "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
  };

  return (
    <div className="home">
      <div className="hero">
        <h1 className="fade-in">Добро пожаловать 🎬</h1>
        <p className="slide-up">Открой мир лучших фильмов</p>
      </div>
    </div>
  );
}

export default Home;