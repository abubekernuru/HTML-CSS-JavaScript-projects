const BtnEl = document.getElementById("add");
BtnEl.addEventListener('click', addNote)

const notes = getNote();
notes.forEach(note => {
  createNoteEl(note.id, note.content);
});

function addNote(){
  const notes = getNote();
  const noteObj = {
    id: Math.floor(Math.random() * 10000),
    content: ''
  }
  createNoteEl(noteObj.id, noteObj.content);
  notes.push(noteObj);
  saveNote(notes)
}


function createNoteEl(id, content) {
  const noteCont = document.createElement('main'); 
  const element = document.createElement('textarea');
  element.classList.add('textarea');
  element.setAttribute("placeholder","Type your note here...");
  element.value = content;
  element.dataset.id = id;

  element.addEventListener('dblclick', ()=>{deleteNote(id, element)});
  element.addEventListener('input', ()=>{updateNote(id, element.value)});
  
  noteCont.appendChild(element)
  document.body.appendChild(noteCont);

  return element;
}

function deleteNote(id, element){
  const isConfirm = confirm("Do you want to delete the note?");
  const notes = getNote();
  if(isConfirm){
    element.remove();
    const updatedNote = notes.filter(note=> note.id !== id);
    saveNote(updatedNote)
  }
}

function updateNote(id, content){
  const notes = getNote();
  const noteIndex = notes.findIndex(note=> note.id === id);
  if(noteIndex !== -1 ){
    notes[noteIndex].content = content;
    saveNote(notes);
  }
}

function saveNote(note){
  localStorage.setItem('notes', JSON.stringify(note))
}

function getNote(){
  const notes = JSON.parse(localStorage.getItem('notes'));
  return notes || [];
}





