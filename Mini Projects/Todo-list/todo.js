const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {

    for (task of tasks){
        
        const listItem = ```<li>
        <input type="checkbox" id="task{{$task.id}}" data-id="12" class="custom-checkbox">
        <label for="task1">Buy groceries</label>
        <img src="bin.svg" class="delete" data-id="12" />
      </li>```;
    }

}

function markTaskAsComplete (taskId) {}

function deleteTask (taskId) {

    const newTasks = tasks.filter(function(task){
        if (task.id != taskId)
            return task;
    })
}

function addTask (task) {

    if(task)
    {
        //adding task in the list;
    tasks.push(task);

    console.log(tasks);
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
        console.log('text',text);

        //if input field is empty when enter key is pressed
        if(!text)
        {
            showNotification('Task Text can\'t be empty');
            return;
        }

        const task = {
            text,
            id: Date.now().toString(),
            dont: 'false'
        };
        e.target.value = "";
        addTask(task);


    }
}

addTaskInput.addEventListener('keyup',handleInputKeypress);