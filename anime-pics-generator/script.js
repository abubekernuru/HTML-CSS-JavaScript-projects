const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector("anime-image");
const animeNameEl = document.querySelector("alime-name");


btnEl.addEventListener("click", async function(){
    try {
        animeContainerEl.style.display = "block"
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "./spinner.svg"
        const url = "https://nekos.life/api/v2/img/neko";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        btnEl.disabled = false;
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist
    } catch (error) {
        console.log(error);
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error happened please try again later!";
    }
})