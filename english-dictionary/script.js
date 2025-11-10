const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningContEl = document.querySelector(".meaning-container");
const titleTextEl = document.getElementById("title");
const meaningTextEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");


async function fetchAPI(word){

    try {
        infoTextEl.style.display = "block";
        meaningContEl.style.display = "none";
        infoTextEl.innerText = `Searching for the meaning of "${word}"`
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const data = await fetch(url);
        const result = await data.json();

        if(result.title){
            infoTextEl.style.display = "none";
            meaningContEl.style.display = "block";
            titleTextEl.innerText = word;
            meaningTextEl.innerText = result.title;
            audioEl.style.display = "none";
        }else{
            infoTextEl.style.display = "none"
            meaningContEl.style.display = "block";
            audioEl.style.display = "inline-flex";
            titleTextEl.innerText = result[0].word;
            meaningTextEl.innerText = result[0].meanings[0].definitions[0].definition;
            audioEl.src = result[0].phonetics[0].audio;
        }
        
    } catch (error) {
        infoTextEl.innerText = `An error happened, please try again later!`
        console.log(error)
    }

}


inputEl.addEventListener('keyup', (e)=> {
    if(e.target.value && e.key === "Enter"){
        fetchAPI(e.target.value);
    }
})