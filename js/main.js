
import Movie from './Movie.js';
import movies from './data.js';


const searchBtn = document.getElementById("search");
const moviesEl = document.getElementById("movies");


if (localStorage.getItem('movies') === null) {
    localStorage.setItem("movies", JSON.stringify({}));
}


function updateLocalStorage(movie) {
    const movies = JSON.parse(localStorage.movies);
    const movieNames = Object.keys(movies);
    if (movieNames.includes(movie.title) === false) {
        movies[movie.title] = movie;
        localStorage.setItem('movies', JSON.stringify(movies));
    }
}

searchBtn.addEventListener("click", () => {
    moviesEl.style.height = '100%'; 
    moviesEl.innerHTML = movies.map(movie => new Movie(movie).getHTML()).join(' ');
});

moviesEl.addEventListener("click", (e) => {
    if (e.target.id === 'mov-btn-txt') {
            const movieObj = e.target.closest('.movie');
            const movie = {
            src: movieObj.getAttribute('data-src'),
            title: movieObj.getAttribute('data-title'),
            stars: movieObj.getAttribute('data-stars'),
            length: movieObj.getAttribute('data-length'),
            genre: movieObj.getAttribute('data-genre'),
            description: movieObj.getAttribute('data-description')
        };
        updateLocalStorage(movie);
    }
    
});