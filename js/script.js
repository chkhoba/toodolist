//selectors
const todoInput = document.querySelector('.todo-input');
const toDoButton =document.querySelector('.todo-button');
const toDoList =document.querySelector('.todo-list');


//events
toDoButton.addEventListener('click',addTodo);
toDoList.addEventListener('click',deleteCheck);



//functions
function addTodo(event){
    //ar gadatvritavs qveda xazi
    event.preventDefault();
    //make todo div(html naxe)

    const todoDiv=document.createElement('div');
    todoDiv.classList.add('todo')

    //creat LI(list)

    const newTodo =document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //chek mark but

    const completedButton= document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"> </i>';

    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    //trash but

    const trashButton= document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"> </i>';

    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //append to HTML list
    toDoList.appendChild(todoDiv);

    todoInput.value ='';



   
}

function deleteCheck(e){
    const item = e.target;
    if(item.classList[0] === 'trash-btn' || 'fa-trash'){
        const todo = item.parentElement;
        todo.remove();
    }



    const itemm = e.target;
    if(itemm.classList[0] === 'complete-btn' || 'fa-check'){
        const todoo = itemm.parentElement;
        todoo.classList.toggle('completed');
    }
}

