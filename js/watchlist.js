import Movie from "./Movie.js";

const addMoviesBtn = document.getElementById("add-movies");
const moviesEl = document.getElementById("movies");



addMoviesBtn.addEventListener("click", () => {
    window.location="index.html";
});



function movieObject(movie) {
    const genre = movie.genre.split(',');
    movie.genre = genre;
    return new Movie(movie).getHTML('minus');
}


function updateDOM() {
    const movies = JSON.parse(localStorage.movies);
    const movieNames = Object.keys(movies);
    if (movieNames.length > 0) {
        moviesEl.style.height = '100%'; 
        moviesEl.innerHTML = Object.values(movies).map(movieObject).join(' ');
    } else {
        moviesEl.innerHTML = `
            <p id="exploring">Your watchlist is looking a little empty...</p>
            <div id="add-movies">
                <img src="images/icons/plus.png">
                <p>Let's add some movies</p>
            </div>
        `;
    }
}



function updateLocalStorage(movieTitle) {
    const movies = JSON.parse(localStorage.movies);
    delete movies[movieTitle];
    localStorage.setItem('movies', JSON.stringify(movies));
}

moviesEl.addEventListener("click", (e) => {
    if (e.target.id === 'mov-btn-txt') {
        const movieObj = e.target.closest('.movie');
        const title = movieObj.getAttribute('data-title');
        updateLocalStorage(title);
        updateDOM();
        document.location.reload();
    }
    
});


updateDOM();
