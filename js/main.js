import movies from './data.js';
import Movie from './Movie.js';


const searchBtn = document.getElementById("search");
const mainEl = document.getElementById("movies");



searchBtn.addEventListener("click", () => {
    mainEl.style.height = '100%'; 
    mainEl.innerHTML = movies.map(movie => new Movie(movie).getHTML()).join(' ');
});

