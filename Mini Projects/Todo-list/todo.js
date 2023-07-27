let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');


function addTaskToDOM(task){

    const li = document.createElement('li');

    li.innerHTML = `
          <input type="checkbox" id="${task.id}" ${task.done? 'checked' : ''} class="custom-checkbox">
          <label for="${task.id}">${task.text}</label>
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


function markTaskAsComplete (taskId) {
    const task = tasks.filter(function(task){
        return task.id === taskId;
    })

    if(task.length > 0)
    {
        const currentTask = task[0];
        currentTask.done = !currentTask.done;
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

function showNotification(text) {
    alert(text);
}

function handleInputKeypress(e){
    if (e.key == 'Enter'){
        const text = e.target.value;

        //if input field is empty when enter key is pressed
        if(!text)
        {
            showNotification('Task Text can\'t be empty');
            return;
        }

        const task = {
            text,
            id: Date.now().toString(),
            done: false
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
        markTaskAsComplete(elemId);
    }
}

function initializeApp(){

addTaskInput.addEventListener('keyup',handleInputKeypress);

taskList.addEventListener('click',handleClickListener);
}

initializeApp();
