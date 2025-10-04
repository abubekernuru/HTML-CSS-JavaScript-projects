const containerEl = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
    const colorContainerEls = document.createElement('div');
    colorContainerEls.classList.add("color__container");
    containerEl.appendChild(colorContainerEls);  
}

const colorContainerEls = document.querySelectorAll(".color__container"); 

randomColor();

function randomColor(){
    const chars = "0123456abcdef";
    let colorLength = 6;
    let colorCode = "";
    for (let i = 0; i < colorLength; i++) {
        let randomNum = Math.floor(Math.random()* chars.length);
        colorCode += chars.substring(randomNum, randomNum + 1);
    }
    return colorCode;
}
generateColor()

function generateColor(){
    colorContainerEls.forEach((colorContainer)=>{
        const newColorCode = randomColor();
        colorContainer.style.backgroundColor = `#${newColorCode}`;
        colorContainer.innerText = `#${newColorCode}`;
    })
}
