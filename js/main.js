import movies from './data.js';
import Movie from './Movie.js';


const searchBtn = document.getElementById("search");
const moviesEl = document.getElementById("movies");



searchBtn.addEventListener("click", () => {
    moviesEl.style.height = '100%'; 
    moviesEl.innerHTML = movies.map(movie => new Movie(movie).getHTML()).join(' ');
});

moviesEl.addEventListener("click", (e) => {
    const movie = e.target.closest('.movie');
    console.log(movie.getAttribute('data-src'));
    console.log(movie.getAttribute('data-title'));
    console.log(movie.getAttribute('data-stars'));
    console.log(movie.getAttribute('data-length'));
    console.log(movie.getAttribute('data-genre'));
    console.log(movie.getAttribute('data-description'));

});