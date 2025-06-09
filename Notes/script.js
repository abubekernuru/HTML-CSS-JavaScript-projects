const adder = document.getElementById("add");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");
const textarea = document.querySelector("textarea");
const displayer = document.querySelector(".display");

adder.addEventListener("click", ()=>{
    const noteApp = document.createElement('main');
    noteApp.classList.add('note');
    noteApp.innerHTML = `
    <section class="notes">
        <div class="tools">
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        <textarea class="textarea" id="textarea"></textarea>
        <div class="display" id="display">Display</div>
    </section>
    `
    document.body.appendChild(noteApp);
})
