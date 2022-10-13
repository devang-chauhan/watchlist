class Movie{
    constructor(data) {
        Object.assign(this, data);
    }
    getHTML() {
        const { src, title, stars, length, genre, description } = this;
        return `
            <div class="movie container">
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
                        <div class="add-to-watchlist">
                            <img id="add-btn" src="images/icons/plus.png">
                            <p>Watchlist</p>
                        </div>
                    </div>
                    
                    <p class="description">${description}</p>
                </div>
                
            </div>
        `;
    }
}

export default Movie;