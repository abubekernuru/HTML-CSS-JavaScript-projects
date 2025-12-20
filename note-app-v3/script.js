const btnEl = document.getElementById("btn");

btnEl.addEventListener('click', addNote);

const notes = getNoteFromLs();
notes.forEach(note => {
    createNoteElement(note.id, note.content)
});

function createNoteElement(id, content){
    const element = document.createElement("textarea");
    element.classList.add('textarea');
    element.value = content;
    element.addEventListener('input', () => { updateLs(id, element.value); });
    element.addEventListener('dblclick', () => {deleteNote(id, element)})
    const containerEl = document.querySelector(".container");
    containerEl.insertBefore(element, btnEl);
}

function updateLs(id, content){
    const notes = getNoteFromLs();
const target = notes.find(note => note.id === id);
    if(target){
        target.content = content;
        saveNoteToLs(notes);
    }
    else{
        return;
    }
}

function deleteNote(id, element){
    const notes = getNoteFromLs();
    const askToDelete = confirm("Do you want to delete the note?");
    if (askToDelete){
        element.remove()
        const updatedNote = notes.filter(note=> note.id !== id);
        saveNoteToLs(updatedNote);
    }
}

function saveNoteToLs(note){
    localStorage.setItem('notes', JSON.stringify(note))
}   

function getNoteFromLs(){
    return JSON.parse(localStorage.getItem('notes') || "[]");
}

function addNote(){
    const notObj = {
        id: Math.floor(Math.random()*10000),
        content: ''
    }
    const notes = getNoteFromLs();
    notes.push(notObj);
    saveNoteToLs(notes)
    createNoteElement(notObj.id, notObj.content);
}