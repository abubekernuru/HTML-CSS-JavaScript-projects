const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list") || "[]");
    list.forEach(task =>{
    toDoList(task);
})

formEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    toDoList();
})

function toDoList(task){
    // Take the input value
    let taskList = inputEl.value;
    if(task){
        taskList = task.name;
    }
    
    // console.log(taskList)
    // create li element & append at the end ul
    const liEl = document.createElement("li");
    if(task && task.checked){
        liEl.classList.add("checked");
    }
    liEl.innerText = taskList;
    
    ulEl.appendChild(liEl);
    // Create two div element & their inner html fontawesome btns
    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
    liEl.appendChild(checkBtnEl);

    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    liEl.appendChild(trashBtnEl);
    inputEl.value = "";

    // Add functionality to buttons

    checkBtnEl.addEventListener("click", ()=>{
        liEl.classList.toggle("checked");
        updateLS();
    });

    trashBtnEl.addEventListener("click", ()=>{
        liEl.remove();
        updateLS();
    });
updateLS();
}

function updateLS(){
    const liEls = document.querySelectorAll("li");
    // console.log(liEls)
    list = [];
    liEls.forEach(liEl => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked")
        })
    })
    localStorage.setItem("list", JSON.stringify(list));
}

