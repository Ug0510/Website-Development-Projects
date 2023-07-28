let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

// function fetchTodos(){

//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         tasks = data.slice(0,10);
//         renderList();
//     })
//     .catch(error => console.log(error))
// }

//Fetch Todo function as Async 
async function fetchTodos(){

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks = data.slice(0,10);
        renderList();
    }catch(error)
    {
        console.log(error);
    }
}


function addTaskToDOM(task){

    const li = document.createElement('li');

    li.innerHTML = `
          <input type="checkbox" id="${task.id}" ${task.completed? 'checked' : ''} class="custom-checkbox">
          <label for="${task.id}">${task.title}</label>
          <img src="./icons/bin.png" class="delete" data-id="${task.id}" />
    `;
    taskList.append(li);
}

function renderList () {

    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++)
    {
        addTaskToDOM(tasks[i]);
    }

    tasksCounter.innerHTML = tasks.length;
}


function ToggleTask (taskId) {
    const task = tasks.filter(function(task){
        return Number(task.id) === Number(taskId);
    })

    if(task.length > 0)
    {
        const currentTask = task[0];
        currentTask.completed = !currentTask.completed;
        renderList();
        showNotification('Task Toggle Successfull')
        return;
    }
    showNotification('Unable to toggle the task')
}

function deleteTask (taskId) {

    const newTasks = tasks.filter(function(task){
        return task.id != taskId;
    })
    tasks = newTasks;
    renderList();
    showNotification('Task deleted successfull');
}

function addTask (task) {

    if(task)
    {
        //adding task in the list;
    tasks.push(task);

    //rendering list to update the list of todo itms
    renderList();
    showNotification('Task Added Successfully!');
    return;
    }

    showNotification('Task con\'t be added successfully ');

}

function showNotification(title) {
    alert(title);
}

function handleInputKeypress(e){
    if (e.key == 'Enter'){
        const title = e.target.value;

        //if input field is empty when enter key is pressed
        if(!title)
        {
            showNotification('Task title can\'t be empty');
            return;
        }

        const task = {
            title,
            id: Date.now(),
            completed: false
        };
        e.target.value = "";
        addTask(task);


    }
}

function handleClickListener(event){
    const target = event.target;

    if(target.className == "delete")
    {
        const elemId = target.dataset.id;
        deleteTask(elemId);
    }
    else if (target.className == "custom-checkbox")
    {
        const elemId = target.id;
        ToggleTask(elemId);
    }
}

function initializeApp(){
fetchTodos();
addTaskInput.addEventListener('keyup',handleInputKeypress);

taskList.addEventListener('click',handleClickListener);
}

initializeApp();
