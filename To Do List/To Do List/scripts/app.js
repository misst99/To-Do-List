// Element Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event)
{
    // prevent form from submitting
    event.preventDefault();

    if(todoInput.value == "")
    {
        alert('Please write a to-do item');
    }
    else 
    {
        // create to do <div>
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // create to do <li>
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    // append or add as a child of our parent <div>
    todoDiv.appendChild(newTodo);

    // Add check mark icon button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = "<i class='fas fa-check'></i>";
    completedButton.classList.add("complete-btn");
    // append or add as a child of our parent <div>
    todoDiv.appendChild(completedButton);
    
    // Add trash bin icon button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-btn");
    // append or add as a child of our parent <div>
    todoDiv.appendChild(trashButton);

    // Append all above code to our list in our HTML
    todoList.appendChild(todoDiv);

    // clear input value
    todoInput.value = "";
    }
}

function deleteCheck(e)
{
    // when you click on the trash bin icon
    const item = e.target;

    // delete the item when trash icon clicked (stored in array)
    if(item.classList[0] === 'trash-btn')
    {
        const todo = item.parentElement;
        todo.remove();
    }

    // when tick mark icon is clicked make item as completed
    if(item.classList[0] === 'complete-btn')
    {
        const todo= item.parentElement;
        todo.classList.toggle('completed');
    }
}