const todoForm=document.querySelector(".todo");
const todoInput=document.querySelector(".todo input");
const todoList=document.querySelector(".todo-list");

let todos=[];

function SaveToDo () {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteToDo(event) { 
 const li= event.target.parentElement;
 li.remove();
 todos=todos.filter((todo)=> todo.id !== parseInt(li.id));
 SaveToDo();
}

function PlusToDolist (newToDoObj) {
    const PlusLi=document.createElement("li");
    PlusLi.id= newToDoObj.id;
    const PlusSpan=document.createElement("span");
    const DeleteButton=document.createElement("button");
    DeleteButton.innerText="x";
    DeleteButton.addEventListener("click", deleteToDo);
    todoList.appendChild(PlusLi);
    PlusLi.appendChild(PlusSpan);
    PlusLi.appendChild(DeleteButton);
    PlusSpan.innerText=newToDoObj.text;

}

function WhenIWasEnterForm (event){
    event.preventDefault();
    const newToDo=todoInput.value;
    todoInput.value="";
    const newToDoObj={
        text:newToDo,
        id:Date.now(),
    };
    todos.push(newToDoObj);
    PlusToDolist(newToDoObj);
    SaveToDo();
}

todoForm.addEventListener("submit", WhenIWasEnterForm);

const saveToDoDos=localStorage.getItem("todos");

if (saveToDoDos !== null) {
    const parseToDo= JSON.parse(saveToDoDos);
    todos=parseToDo;
    parseToDo.forEach(PlusToDolist);
}