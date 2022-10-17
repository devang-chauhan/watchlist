
import Movie from './Movie.js';


const searchBtn = document.getElementById("search");
const moviesEl = document.getElementById("movies");
const inputEl = document.getElementById("input");


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



function addMovieToDom(movie) {
    const movieObj = {
        'title': movie.Title,
        'src': movie.Poster,
        'stars': movie.imdbRating,
        'length': movie.Runtime,
        'genre': movie.Genre,
        'description': movie.Plot
    };

    
    moviesEl.innerHTML += new Movie(movieObj).getHTML();
}


function getIds(res) {
    const ids = [];
    
    const movieArr = res.Search;
    for (let i = 0; i<movieArr.length; i++){
        ids.push(movieArr[i].imdbID);
    }
    return ids;
}

async function updateDOM(ids) {
    for (let i = 0; i < ids.length; i++){
        const response = await fetch(`http://www.omdbapi.com/?apikey=79e72e2a&type="movie"&i=${ids[i]}`);
        const movie = await response.json();
        if (movie.Poster !== 'N/A') {
            addMovieToDom(movie);
        }
    }
}

searchBtn.addEventListener("click", async () => {
    if (inputEl.value.length > 0) {
        moviesEl.innerHTML = '';
        moviesEl.style.height = '100%'; 

        const search = inputEl.value;
        const response = await fetch(`http://www.omdbapi.com/?apikey=79e72e2a&type="movie"&t=${search}&s=${search}}`);
        const output = await response.json();
        if (output.Response === 'True') {
            const ids = getIds(output);
            const movies = updateDOM(ids);
        } else {
            alert(output.Error);
        }
        
    } else {
        alert('Enter a movie name in the search box');
    }
    
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