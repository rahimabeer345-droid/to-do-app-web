let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
displayTasks();

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  displayTasks();
}

function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = task;

    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {
      editTask(index);
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
      deleteTask(index);
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

function editTask(index) {
  let newTask = prompt("Edit your task", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks[index] = newTask.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}
