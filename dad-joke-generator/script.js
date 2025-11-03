const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const api_key = "0Kij3UND/GmNg4VI8DGMng==r7QMncDWEXK9mKNz";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": api_key
    }
}

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes";

btnEl.addEventListener('click', getJoke);

async function getJoke() {
    try {
        jokeEl.innerText = "updating...";
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        console.log(data[0].joke)
        jokeEl.innerText = data[0].joke
        btnEl.innerText = "Tell me a joke"
        btnEl.disabled = false;
    } catch (error) {
            jokeEl.style.color = "red";
            jokeEl.innerText = "There is a problem please try again later!";
            btnEl.innerText = "Tell me a joke";
            btnEl.disabled = false;
    }

}