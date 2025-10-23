const imgContainerEl = document.querySelector('.img-container');
// console.log(imgContainerEl)

const btnEl = document.querySelector('.btn');
// console.log(btnEl)

btnEl.addEventListener("click", () => {
    addNewImages();
})

function addNewImages() {
    let imgNum = 6;
    for (let index = 0; index < imgNum; index++) {
        const imgEl = document.createElement("img");
        imgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`
        imgContainerEl.appendChild(imgEl);
        
    }
}