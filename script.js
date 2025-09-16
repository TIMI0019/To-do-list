
   const taskInput = document.getElementById('taskInput');
   const addBtn = document.getElementById('addBtn')
   const taskList = document.getElementById('taskList')



const nameInput = document.getElementById('nameInput');
const nameOutput= document.getElementById('nameOutput');


 function addTask() {
     const taskName= taskInput.value.trim();
if (taskName) {
        const li = document.createElement('li');
        li.innerHTML = `${'taskName'} <button class = "delete">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = "  ";
}}

 addBtn.addEventListener("dblclick",function(){addBtn.style.backgroundColor = "blue"});
 addBtn.addEventListener("mouseover", function(){taskInput.style.backgroundColor = "red"})
 addBtn.addEventListener("dblclick",function(){addBtn.style.color = "red"})

 taskInput.addEventListener("keypress" , (e)=> {
    if (e.key === "k"){
        addTask();
    }
 })
addBtn.addEventListener('click', addTask)

 taskList.addEventListener("click", (e)=>{
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
 });
nameInput.addEventListener("input", () => {
    const name = nameInput.value.trim();
    nameOutput.textContent = name ? `Hello! ${name}` : "Hello, Stranger!"
});
 taskInput.addEventListener("keyup" , (e)=> {
    if (e.key === "ArrowUp"){
        addTask();
    }
 })


 

