// Query Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.todo-filter');

// Event Listeners
document.addEventListener('DOMContentLoaded', getDataFromLocalStorageAndRender);
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', todoAction);
todoFilter.addEventListener('click', filterTodos);

// render the todo list 
function renderTodoList(value) {
    // add a todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // add a todo list item - li
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = value;
    todoDiv.appendChild(newTodo);

    // add a checked button
    const checkedButton = document.createElement('button');
    checkedButton.classList.add('checked-btn');
    checkedButton.innerHTML = '<i class="fa-regular fa-square"></i>';
    todoDiv.appendChild(checkedButton);
    
    // add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(deleteButton);

    // add the new todo the todo list
    todoList.appendChild(todoDiv);
}

// Functions
function addTodo(event) {
    event.preventDefault();
    renderTodoList(todoInput.value);
    saveTodoInLocalStorage(todoInput.value);

    // after adding the new todo to the list, clear the todo input
    todoInput.value = "";
}

function todoAction(event){
    const item = event.target;

    // check for deletion of the any todo
    if (item.classList[0] === 'delete-btn') {
        item.parentElement.remove();
        deleteTodoFromLocalStorage(item);
    }

    // check for the completion of any todo
    if (item.classList[0] === 'checked-btn') {

        // just to change the icon from the blank to checked and then vice versa
        item.children[0].classList.toggle("fas");
        item.children[0].classList.toggle("fa-check");
        item.children[0].classList.toggle("fa-square");
        item.children[0].classList.toggle("fa-regular");

        // to mark any todo completed
        item.parentElement.classList.toggle('completed');
    }
}

// Filter the todos
function filterTodos(event){
    const childTodos=todoList.childNodes;
    childTodos.forEach((todos) => {
        switch(event.target.value) {
            case 'all':
                todos.style.display = 'flex'
                break;
            case 'completed':
                if (todos.classList.contains('completed')) {
                    todos.style.display = 'flex';
                } else {
                    todos.style.display = 'none'
                }
                break;
            case 'uncompleted':
                if (!todos.classList.contains('completed')) {
                    todos.style.display = 'flex';
                } else {
                    todos.style.display = 'none'
                }
                break;
        }
    })
}

// check that is there any todos value in local storage
function checkLocalStorageValue() {
    let todos;
    if (localStorage.getItem('todos') === null) todos = []
    else todos = JSON.parse(localStorage.getItem('todos'));
    return todos;
}

// save the new todo in the local storage
function saveTodoInLocalStorage(todo) {
    const todos = checkLocalStorageValue();
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// on document load check the todos value in local storage and if it exists render the values on UI
function getDataFromLocalStorageAndRender() {
    const todos = checkLocalStorageValue();
    todos.forEach((todo) => {
        renderTodoList(todo)
    });
}

// delete the todo values from the local storage
function deleteTodoFromLocalStorage(todo) {
    const todos = checkLocalStorageValue();
    const deletedTodoIndex = todos.indexOf(todo.parentElement.children[0].innerText)
    // console.log(todo.parentElement.children[0].innerText);
    todos.splice(deletedTodoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}