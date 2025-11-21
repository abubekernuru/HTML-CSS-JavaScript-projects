const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-image");
const animeNameEl = document.querySelector(".anime-name");


btnEl.addEventListener("click", async function(){
    try {
        animeContainerEl.style.display = "block"
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating...";
        animeImgEl.src = "./spinner.svg"
        const response = await fetch('https://nekos.life/api/v2/img/neko');
        const data = await response.json();
        // console.log(data);
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeImgEl.src = data.url;
        animeNameEl.innerText = "Hello there!"
    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An error happened please try again later!";
    }
})