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
                        <p>⭐ ${stars}</p>
                    </div>

                    <div class="metadata">
                        <p>${length} min</p>
                        <p>${genre.join(',')}</p>
                        <div class="add-to-watchlist">
                            <p id="add-btn">+</p>
                            <p>Watchlist</p>
                        </div>
                    </div>
                    
                    <p>${description}</p>
                </div>
                
            </div>
        `;
    }
}

export default Movie;