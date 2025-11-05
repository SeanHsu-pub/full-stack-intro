
const todoInput= document.querySelector(".todo-input");
const todoButton= document.querySelector(".todo-button");
const todoList= document.querySelector(".todo-list");
const card= document.querySelector(".card");
const todoCountDisplay= document.querySelector(".todo-count");

let todoCount=0;

function addTodo(){
    if (todoInput.value === "") return;

    const todo= document.createElement("li");
    todo.innerHTML= `<input type="checkbox" class="todo-checkbox" /><span>${todoInput.value}</span><button class="deleteBtn">X</button>`;
    const deleteBtn= todo.querySelector(".deleteBtn");
    const todoCheckbox= todo.querySelector(".todo-checkbox");
    deleteBtn.addEventListener("click", () => {
    if (!todoCheckbox.checked) {
      todoCount -= 1;
      updateTodoCount() 
    }
        todo.remove();
    });
    todoCheckbox.addEventListener("change", (e) => {
        if(e.target.checked){
            todo.style.textDecoration="line-through";
            todoList.append(todo);
            todoCount -= 1;
            updateTodoCount()
        }else{
            todo.style.textDecoration="none";
            todoCount += 1;
            updateTodoCount()
        }
    });
    todoCount += 1;
    updateTodoCount()
    todoList.prepend(todo);
    todoInput.value="";
}

function updateTodoCount(){
    todoCountDisplay.textContent=todoCount;
}
todoButton.addEventListener("click",addTodo);
todoInput.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        addTodo();
    }
});