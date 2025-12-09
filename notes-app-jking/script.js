const btnEl = document.getElementById('btn');
const containerEl = document.querySelector(".notes");

getNotes().forEach((note) => {
    const noteEl = createnoteEl(note.id, note.content);
    containerEl.insertBefore(noteEl, btnEl);
});

function createnoteEl(id, content) {
    const element = document.createElement("textarea");
    element.title = "Enter your note here";
    element.placeholder = "Type your note..."
    element.value = content;
    element.id = id;
    element.classList.add("textarea");

    element.addEventListener('input', ()=>{updateLs(id, element.value)})

    element.addEventListener('dblclick', ()=>{
        const comfirm = confirm('Do you want to delete it?');
        if(comfirm){
            deleteNote(id, element)
        }
    })
    return element;
}

function updateLs(id, content) {
  const notes = getNotes();
  const target = notes.filter((note) => note.id == id)[0];
  target.content = content;
  saveNotes(notes);
}

function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

function getNotes(){
    return JSON.parse(localStorage.getItem('notes') || "[]")
}

function deleteNote(id, element){
    const notes = getNotes().filter((note)=>note.id != id)
    saveNotes(notes);
    containerEl.removeChild(element);
}

function addNote() {
    const notes = getNotes();
    const noteObj = {
        id: Math.floor(Math.random() * 10000),
        content: ""
    }
    const noteEl = createnoteEl(noteObj.id, noteObj.content);
    containerEl.insertBefore(noteEl, btnEl);
    notes.push(noteObj)
    saveNotes(notes);
}

btnEl.addEventListener('click', addNote)