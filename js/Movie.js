class Movie{
    constructor(data) {
        Object.assign(this, data);
    }
    getHTML() {
        const { src, title, stars, length, genre, description } = this;
        return `
            <div class="movie container" \
                data-src=${src} \
                data-title=${JSON.stringify(title)}\
                data-stars=${stars} \
                data-length=${length} \
                data-genre=${genre} \
                data-description=${JSON.stringify(description)}
                >
                <img src=${src} class="poster">
                <div class="details">
                    <div class="title">
                        <h3>${title}</h3>
                        <p class="star">⭐</p>
                        <p class="stars">${stars}</p>
                    </div>

                    <div class="metadata">
                        <p class="length">${length} min</p>
                        <p>${genre.join(',')}</p>
                        <div id="add-to-watchlist">
                            <img id="add-btn" src="images/icons/plus.png">
                            <p id="add-txt" >Watchlist</p>
                        </div>
                    </div>
                    
                    <p class="description">${description}</p>
                </div>
                
            </div>
        `;
    }
}

export default Movie;