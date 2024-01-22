function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskName = taskInput.value;

    if (taskName.trim() !== "") {
        var taskList = document.getElementById("taskList");

        var taskElement = document.createElement("div");
        taskElement.className = "task";
        taskElement.innerHTML ='<div class="task-name">' + taskName + '</div>' +
            '<div>' +
            '<button onclick="toggleDone(this)">✔️</button>' +
            ' ' +
            '<button onclick="deleteTask(this)">❌</button>' +
            '</div>';

        taskList.appendChild(taskElement);

        taskInput.value = "";
    }
}

function toggleDone(button) {
    var taskElement = button.parentElement.parentElement;
    taskElement.classList.toggle("done");
}

function deleteTask(button) {
    var taskElement = button.parentElement.parentElement;
    taskElement.remove();
}
