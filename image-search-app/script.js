const access_key="GsmzhG83gQVUyP3AUfjdgZ2-3mFZwMcnQVPq67nXC-E";
// const application_id="870055";
// const secret_key="KSMURX0GVl5tU5CPm_NYFeqaCzF8jPIHGRHggTqIRBw";
// const url="https://api.unsplash.com//search/photos?query=cats&client_id=GsmzhG83gQVUyP3AUfjdgZ2-3mFZwMcnQVPq67nXC-E"

const formEl = document.getElementById('search-form');
const inputEl = document.getElementById('search-input');
const imageContEl = document.getElementById('image-results');
const showMoreBtn = document.getElementById('show-more-btn');

formEl.addEventListener('submit', searchImage);


let query = "";
let page = 1;

async function searchImage(e){
    e.preventDefault();
    try {
        imageContEl.innerHTML=""
        page=1;
        query = inputEl.value;
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${access_key}&page=${page}`);
        const data = await res.json();
        console.log(data);
        (data.results).forEach((result)=>{
            const imageHtml =`
                <div class="img-container">
                    <img src='${result.urls.small}' alt='${result.alt_description}'/>
                    <a href=${result.links.html} target='_blank'>${result.alt_description || "View on Unsplash"}</a>
                </div>
            `
            imageContEl.insertAdjacentHTML("beforeend", imageHtml)
        })
        showMoreBtn.style.display = 'block';
    } catch (error) {
        console.log(error)
    }
}

showMoreBtn.addEventListener('click', loadMore)

async function loadMore(e) {
    try {
        query = inputEl.value;
        page++
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${access_key}&page=${page}`);
        const data = await res.json();
        console.log(data);
        (data.results).forEach((result)=>{
            const imageHtml =`
                <div class="img-container">
                    <img src='${result.urls.small}' alt='${result.alt_description}'/>
                    <a href=${result.links.html} target='_blank'>${result.alt_description || "View on Unsplash"}</a>
                </div>
            `
            imageContEl.insertAdjacentHTML("beforeend", imageHtml)
        })
    } catch (error) {
        console.log(error)
    }
}