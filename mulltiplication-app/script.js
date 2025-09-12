const questionEl = document.querySelector('.form .question');
const formEl = document.querySelector('.form');
const inputEl = document.getElementById('input');
const scoreEl = document.querySelector('.form .score');

let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

questionEl.innerText = `What is ${num1} multiply by ${num2}`;

let score = JSON.parse(localStorage.getItem('score'));
let correctAns = num1 * num2;

scoreEl.innerText = `Score: ${score}`;

formEl.addEventListener('submit', ()=>{
    let userAns = parseInt(inputEl.value); 
    if(userAns === correctAns){
        score++
        updateLs();
    }else{
        score--
        updateLs();
    }

})

function updateLs(){
    localStorage.setItem('score', JSON.stringify(score));
}