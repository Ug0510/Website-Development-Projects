const tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}

function markTaskAsComplete (taskId) {}

function deleteTask (taskId) {}

function addTask (task) {

    //adding task in the list;
    tasks.push(task);

    console.log(tasks);
    //rendering list to update the list of todo itms
    renderList();

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