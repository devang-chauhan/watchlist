const searchBtn = document.getElementById("search");
const mainEl = document.getElementById("posters");



searchBtn.addEventListener("click", () => {
    mainEl.style.height = '100%'; 
    mainEl.innerHTML = `
    
    <div>
        <img src="./images/posters/pos_1.jpg" class="poster">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas. Vulputate mi sit amet mauris commodo quis.</p>
    </div>

    <div>
        <img src="./images/posters/pos_2.jpg" class="poster">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas. Vulputate mi sit amet mauris commodo quis.</p>
    </div>

    <div>
        <img src="./images/posters/pos_3.jpg" class="poster">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas. Vulputate mi sit amet mauris commodo quis.</p>
    </div>

    <div>
        <img src="./images/posters/pos_4.jpg" class="poster">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas. Vulputate mi sit amet mauris commodo quis.</p>
    </div>
    `;
});

