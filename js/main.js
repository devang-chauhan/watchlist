
import Movie from './Movie.js';
import movies from './data.js';


const searchBtn = document.getElementById("search");
const moviesEl = document.getElementById("movies");

if (localStorage.getItem('movieNames') === null) {
    localStorage.setItem('movieNames', JSON.stringify([]));
}
if (localStorage.getItem('movies') === null) {
    localStorage.setItem("movies", JSON.stringify({}));
}


function updateLocalStorage(movie) {
    const movieNames = JSON.parse(localStorage.movieNames);
    if (movieNames.includes(movie.title) === false) {
        const movies = JSON.parse(localStorage.movies);
        const movieNames = JSON.parse(localStorage.movieNames);
        movies[movie.title] = movie;
        movieNames.push(movie.title);
        localStorage.setItem('movies', JSON.stringify(movies));
        localStorage.setItem('movieNames', JSON.stringify(movieNames));
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