import Movie from "./Movie.js";

const addMoviesBtn = document.getElementById("add-movies");
const moviesEl = document.getElementById("movies");
const movies = JSON.parse(localStorage.movies);

addMoviesBtn.addEventListener("click", () => {
    window.location="index.html";
});




function movieObject(movie) {
    const genre = movie.genre.split(',');
    movie.genre = genre;
    return new Movie(movie).getHTML();
}

if (movies.length > 0) {
    moviesEl.style.height = '100%'; 
    moviesEl.innerHTML = movies.map(movieObject).join(' ');
}

