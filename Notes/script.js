const adder = document.getElementById("add");

adder.addEventListener("click", ()=>{
    notesApp();
})

function notesApp(){
    const noteApp = document.createElement('main');
    noteApp.classList.add('note');
    noteApp.innerHTML = `
    <section class="notes">
        <div class="tools"> 
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        <textarea class="textarea hidden" id="textarea"></textarea>
        <div class="display" id="display"></div>
    </section>
    `
    const editBtn = noteApp.querySelector(".edit");
    const deleteBtn = noteApp.querySelector(".delete");
    const textarea = noteApp.querySelector("textarea");
    const displayer = noteApp.querySelector(".display");

    const text = textarea.value;
    displayer.innerHTML = marked(text);

    textarea.addEventListener("input", (e)=>{
        const { value } = e.target;
        displayer.innerHTML = marked(value);
    })
    
    editBtn.addEventListener("click", () => {
        if (textarea.classList.contains("hidden")) {
            textarea.value = displayer.textContent;
        }
        textarea.classList.toggle("hidden");
        displayer.classList.toggle("hidden");
    })

    deleteBtn.addEventListener("click", ()=>{
        noteApp.remove();
    })
        document.body.appendChild(noteApp);
    


}
notesApp();