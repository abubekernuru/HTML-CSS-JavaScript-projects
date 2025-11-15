const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");


btnEl.addEventListener("click", getQuote);

async function getQuote() {
    try {

        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        const apiUrl = "https://api.quotable.io/random";
        const response = await fetch(apiUrl);
        const data = await response.json();
        const quoteAuthor = data.author;
        const quoteContent = data.content;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = `~ ${quoteAuthor}`;
        btnEl.innerText = "Get A Quote";
        btnEl.disabled = false;
    
    } catch (error) {
        quoteEl.innerText = "An error happened please try again later";
        authorEl.innerText = "An error happened please try again later";
        console.log(error)
    }
}

getQuote();