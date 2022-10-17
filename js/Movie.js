class Movie{
    constructor(data) {
        Object.assign(this, data);
    }
    getHTML(card_type='add') {
        const { src, title, stars, length, genre, description } = this;
        
        let btnImg = null;
        if (card_type === 'add') {
            btnImg = "images/icons/plus.png";
        } else if (card_type === 'minus'){
            btnImg = "images/icons/minus.png";
        }

        return `
            <div class="movie container" \
                data-src=${src} \
                data-title=${JSON.stringify(title)}\
                data-stars=${stars} \
                data-length=${JSON.stringify(length)} \
                data-genre=${genre} \
                data-description=${JSON.stringify(description)}
                >
                <img src=${src}>
                <div class="details">
                    <div class="title">
                        <h3>${title}</h3>
                        <p class="star">⭐</p>
                        <p class="stars">${stars}</p>
                    </div>

                    <div class="metadata">
                        <p class="length">${length}</p>
                        <p>${genre}</p>
                        <div id="add-to-watchlist">
                            <img id="mov-btn" src=${btnImg}>
                            <p id="mov-btn-txt" >Watchlist</p>
                        </div>
                    </div>
                    
                    <p class="description">${description}</p>
                </div>
                
            </div>
        `;
    }
}

export default Movie;