const btnEl = document.getElementById("btn");
const emojiNameEl = document.querySelector(".emoji-name");

const emoji = [];
async function getEmoji() {
    try {
            btnEl.disabled = true;
            btnEl.innerText = "...";
            emojiNameEl.innerText = "Loading...";
            const proxyUrl = 'https://corsproxy.io/';
            const targetUrl = 'https://www.emoji.family/api/emojis';
            const response = await fetch(`${proxyUrl}?${encodeURIComponent(targetUrl)}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            btnEl.disabled = false;
            console.log(data)
            
            const randomNum = Math.floor(Math.random() * 1500);
            if(emoji.length === 0){
                for (let i = 0; i < data.length; i++) {
                emoji.push({
                    name: data[i].annotation, 
                    character: data[i].emoji
                })
            }
            }
            emojiNameEl.innerText = emoji[randomNum].name;
            btnEl.innerText = emoji[randomNum].character;
    } catch (error) {
        console.log(error);
        btnEl.innerText = "❌"
    }

}

getEmoji()

btnEl.addEventListener("click", () => {
    getEmoji();
})