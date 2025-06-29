const searchBar = document.querySelector(".search-bar");
const searchBarCont = document.querySelector(".search-bar-container");

searchBar.addEventListener("click", ()=> {
    searchBarCont.classList.toggle("active");
})