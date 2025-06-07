const form = document.getElementById("formEl");
const inputEl = document.getElementById("input");
const displayTodo = document.getElementById("displayTodo");

const todoLs = JSON.parse(localStorage.getItem("todos"));

function todoApp(){
    // Event when clicking enter
form.addEventListener('submit', 
        (e)=>{
            e.preventDefault();
            const inputText = inputEl.value;
            const list = document.createElement("li");
            // console.log(list)
            list.textContent = inputText;
            // console.log(list.appendChild(todos))
            displayTodo.appendChild(list);

            inputEl.value = "";
            updateLs();
        }
    )
    displayTodo.addEventListener('click', (e) => {
        if(e.target.tagName === "LI"){
            e.target.classList.toggle('todoStyle');
            updateLs();
        }
    })
    displayTodo.addEventListener('contextmenu', (e) => {
        if(e.target.tagName === "LI"){
            e.preventDefault();
            e.target.remove();
            updateLs();
        }
    })
    if(todoLs){
        todoLs.forEach((todo)=>{
            const list = document.createElement("li");
            list.innerText = todo.text;
            if(todo.completed){
            list.classList.add('todoStyle');
            }
            displayTodo.appendChild(list);
        })
        
    }

}
todoApp();

function updateLs() {
    const todos = document.querySelectorAll("li");
    const todoCr = [];
    todos.forEach((todo) => {
        todoCr.push({
            text: todo.textContent,
            completed: todo.classList.contains('todoStyle')
        })
    });
    localStorage.setItem("todos", JSON.stringify(todoCr));
}
