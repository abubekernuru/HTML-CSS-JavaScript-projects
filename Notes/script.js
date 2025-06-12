const adder = document.getElementById("add");

adder.addEventListener("click", () => {
    notesApp();
});

// Restore notes from localStorage
const note = JSON.parse(localStorage.getItem("notes"));
if (note && Array.isArray(note)) {
    note.forEach(n => notesApp(n));
}

function notesApp(text = "") {
    const noteApp = document.createElement('main');
    noteApp.classList.add('note');
    noteApp.innerHTML = `
    <section class="notes">
        <div class="tools">
            <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        <textarea class="textarea ${text ? 'hidden' : ''}"></textarea>
        <div class="display ${text ? '' : 'hidden'}"></div>
    </section>
    `;

    const editBtn = noteApp.querySelector(".edit");
    const deleteBtn = noteApp.querySelector(".delete");
    const textarea = noteApp.querySelector("textarea");
    const displayer = noteApp.querySelector(".display");

    // Set textarea and display to the note text if provided
    textarea.value = text;
    displayer.innerHTML = marked(text);

    textarea.addEventListener("input", (e) => {
        displayer.innerHTML = marked(e.target.value);
        updateLs();
    });

    editBtn.addEventListener("click", () => {
        textarea.classList.toggle("hidden");
        displayer.classList.toggle("hidden");
        if (!textarea.classList.contains("hidden")) {
            textarea.focus();
        }
    });

    deleteBtn.addEventListener("click", () => {
        noteApp.remove();
        updateLs(); // Update localStorage on delete
    });

    document.body.appendChild(noteApp);
}

function updateLs() {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];
    notesText.forEach((note) => {
        notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}