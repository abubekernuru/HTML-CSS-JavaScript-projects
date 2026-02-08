const access_key="GsmzhG83gQVUyP3AUfjdgZ2-3mFZwMcnQVPq67nXC-E";
const application_id="870055";
const secret_key="KSMURX0GVl5tU5CPm_NYFeqaCzF8jPIHGRHggTqIRBw";
const url="https://api.unsplash.com//search/photos?query=cats&client_id=GsmzhG83gQVUyP3AUfjdgZ2-3mFZwMcnQVPq67nXC-E"

const formEl = document.getElementById('search-form');
const inputEl = document.getElementById('search-input');
const imageContEl = document.getElementById('image-results');

formEl.addEventListener('submit', searchImage);

async function searchImage(e){
    e.preventDefault();
    try {
        imageContEl.innerHTML=""
        const query = inputEl.value;
        const res = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${access_key}`);
        const data = await res.json();
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